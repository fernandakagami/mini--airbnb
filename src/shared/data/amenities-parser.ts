import { Bath, CarFront, ChefHat, CookingPot, Flame, Heater, LucideIcon, Rows4, Utensils, WavesLadder, Wifi, Wind } from "lucide-react";
import { EAmenities } from "../enums/amenity";

export const amenitiesParser: Record<EAmenities, { icon: LucideIcon; label: string }> = {
  [EAmenities.Wifi]: {
    icon: Wifi,
    label: "Wi-Fi",
  },
  [EAmenities.AirConditioning]: {
    icon: Wind,
    label: "Ar-condicionado",
  },
  [EAmenities.Kitchen]: {
    icon: Utensils,
    label: "Cozinha",
  },
  [EAmenities.Parking]: {
    icon: CarFront,
    label: "Estacionamento",
  },
  [EAmenities.Pool]: {
    icon: WavesLadder,
    label: "Piscina",
  },
  [EAmenities.Grill]: {
    icon: Rows4,
    label: "Churrasqueira",
  },
  [EAmenities.Fireplace]: {
    icon: Flame,
    label: "Lareira",
  },
  [EAmenities.Bath]: {
    icon: Bath,
    label: "Hidromassagem",
  },
  [EAmenities.Heater]: {
    icon: Heater,
    label: "Aquecedor",
  },
  [EAmenities.EquippedKitchen]: {
    icon: ChefHat,
    label: "Cozinha equipada",
  },
  [EAmenities.CompactKitchen]: {
    icon: CookingPot,
    label: "Cozinha compacta",
  },
};

export const allAmenities = Object.values(amenitiesParser);