

'use client';


import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { RentalFormData } from '@/app/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(5, 'Address is required'),
  townCity: z.string().min(2, 'Town/City is required'),
  pickUpLocation: z.string().min(2, 'Pick-up location is required'),
  pickUpDate: z.string().min(1, 'Pick-up date is required'),
  pickUpTime: z.string().min(1, 'Pick-up time is required'),
  dropOffLocation: z.string().min(2, 'Drop-off location is required'),
  dropOffDate: z.string().min(1, 'Drop-off date is required'),
  dropOffTime: z.string().min(1, 'Drop-off time is required'),
  paymentMethod: z.enum(['creditCard', 'paypal', 'bitcoin']),
  cardNumber: z.string().optional(),
  expirationDate: z.string().optional(),
  cardHolder: z.string().optional(),
  cvc: z.string().optional(),
  marketing: z.boolean(),
  termsAccepted: z.boolean(),
});

const locations = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
];

const times = Array.from({ length: 24 }, (_, i) => 
  `${String(i).padStart(2, '0')}:00`
);

export default function RentalForm() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RentalFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketing: false,
      termsAccepted: false,
    },
  });

  const paymentMethod = watch('paymentMethod');

  const onSubmit = async () => {
    setIsLoading(true);
 
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Step indicators */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`flex-1 h-2 mx-1 rounded ${
              s <= step ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Billing Info */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Billing Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                {...register('phoneNumber')}
                placeholder="Phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                {...register('address')}
                placeholder="Address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="townCity">Town/City</Label>
              <Input
                id="townCity"
                {...register('townCity')}
                placeholder="Town or city"
              />
              {errors.townCity && (
                <p className="text-red-500 text-sm">{errors.townCity.message}</p>
              )}
            </div>
          </div>
          <Button type="button" onClick={() => setStep(2)}>
            Next
          </Button>
        </div>
      )}

      {/* Step 2: Rental Info */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Rental Info</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Pick-Up Location</Label>
                <Select
                  onValueChange={(value) =>
                    register('pickUpLocation').onChange({
                      target: { value, name: 'pickUpLocation' },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Pick-Up Date</Label>
                <Input
                  type="date"
                  {...register('pickUpDate')}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label>Pick-Up Time</Label>
                <Select
                  onValueChange={(value) =>
                    register('pickUpTime').onChange({
                      target: { value, name: 'pickUpTime' },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {times.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Drop-Off Location</Label>
                <Select
                  onValueChange={(value) =>
                    register('dropOffLocation').onChange({
                      target: { value, name: 'dropOffLocation' },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Drop-Off Date</Label>
                <Input
                  type="date"
                  {...register('dropOffDate')}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label>Drop-Off Time</Label>
                <Select
                  onValueChange={(value) =>
                    register('dropOffTime').onChange({
                      target: { value, name: 'dropOffTime' },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {times.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button type="button" variant="outline" onClick={() => setStep(1)}>
              Previous
            </Button>
            <Button type="button" onClick={() => setStep(3)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Payment Method */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <RadioGroup
            defaultValue="creditCard"
            onValueChange={(value) =>
              register('paymentMethod').onChange({
                target: { value, name: 'paymentMethod' },
              })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="creditCard" id="creditCard" />
              <Label htmlFor="creditCard">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bitcoin" id="bitcoin" />
              <Label htmlFor="bitcoin">Bitcoin</Label>
            </div>
          </RadioGroup>

          {paymentMethod === 'creditCard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  {...register('cardNumber')}
                  placeholder="Card number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expirationDate">Expiration Date</Label>
                <Input
                  id="expirationDate"
                  {...register('expirationDate')}
                  placeholder="MM/YY"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardHolder">Card Holder</Label>
                <Input
                  id="cardHolder"
                  {...register('cardHolder')}
                  placeholder="Card holder name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  {...register('cvc')}
                  placeholder="CVC"
                  maxLength={3}
                />
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <Button type="button" variant="outline" onClick={() => setStep(2)}>
              Previous
            </Button>
            <Button type="button" onClick={() => setStep(4)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Confirmation</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketing"
                {...register('marketing')}
              />
              <Label htmlFor="marketing">
                I agree to receive marketing and newsletter emails
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="termsAccepted"
                {...register('termsAccepted')}
              />
              <Label htmlFor="termsAccepted">
                I agree to the terms and conditions
              </Label>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button type="button" variant="outline" onClick={() => setStep(3)}>
              Previous
            </Button>
            <Link href={`/AdminCarRent`}>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Rent Now'}
            </Button>
            </Link>

          </div>
        </div>
      )}
    </form>
  );
}