import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "car"] {
  name,
  brand,
  type,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  "imageUrl": image.asset->url
}
`)
export const fourproducts = defineQuery(`
    *[_type == "car"][0..3] {
  name,
  brand,
  type,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  "imageUrl": image.asset->url
}
`)
