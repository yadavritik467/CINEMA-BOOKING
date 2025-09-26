export interface BookingData {
  label: string;
  price: 750 | 550 | 250 | 100;
  category: "Ultra-Golden" | "Golden" | "Premium" | "Silver";
  seat: {
    number: number;
    className:
      | "bg-blue-600"
      | "bg-yellow-600"
      | "bg-gray-500 text-white"
      | "bg-white";
    isChecked: boolean;
    isBooked: boolean;
  }[];
  availableLen: () => number;
  selectedSeatsLen: () => number;
}
export const bookingDummyData: BookingData[] = [
  {
    label: "A",
    price: 750,
    category: "Ultra-Golden",
    seat: [
      { number: 1, className: "bg-white", isChecked: false, isBooked: false },
      { number: 2, className: "bg-white", isChecked: false, isBooked: false },
      {
        number: 3,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      {
        number: 4,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      { number: 5, className: "bg-white", isChecked: false, isBooked: false },
      { number: 6, className: "bg-white", isChecked: false, isBooked: false },
    ],
    availableLen: function () {
      return this.seat.filter((s) => s?.isBooked !== true)?.length;
    },
    selectedSeatsLen: function () {
      return this.seat.filter((s) => s?.isChecked === true)?.length;
    },
  },
  {
    label: "B",
    price: 550,
    category: "Golden",
    seat: [
      {
        number: 1,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      {
        number: 2,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      {
        number: 3,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      {
        number: 4,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      {
        number: 5,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
      {
        number: 6,
        className: "bg-gray-500 text-white",
        isChecked: false,
        isBooked: true,
      },
    ],
    availableLen: function () {
      return this.seat.filter((s) => s?.isBooked !== true)?.length;
    },
    selectedSeatsLen: function () {
      return this.seat.filter((s) => s?.isChecked === true)?.length;
    },
  },
  {
    label: "C",
    price: 250,
    category: "Premium",
    seat: [
      { number: 1, className: "bg-white", isChecked: false, isBooked: false },
      { number: 2, className: "bg-white", isChecked: false, isBooked: false },
      { number: 3, className: "bg-white", isChecked: false, isBooked: false },
      { number: 4, className: "bg-white", isChecked: false, isBooked: false },
      { number: 5, className: "bg-white", isChecked: false, isBooked: false },
      { number: 6, className: "bg-white", isChecked: false, isBooked: false },
    ],
    availableLen: function () {
      return this.seat.filter((s) => s?.isBooked !== true)?.length;
    },
    selectedSeatsLen: function () {
      return this.seat.filter((s) => s?.isChecked === true)?.length;
    },
  },
  {
    label: "D",
    price: 100,
    category: "Silver",
    seat: [
      { number: 1, className: "bg-white", isChecked: false, isBooked: false },
      { number: 2, className: "bg-white", isChecked: false, isBooked: false },
      { number: 3, className: "bg-white", isChecked: false, isBooked: false },
      { number: 4, className: "bg-white", isChecked: false, isBooked: false },
      { number: 5, className: "bg-white", isChecked: false, isBooked: false },
      { number: 6, className: "bg-white", isChecked: false, isBooked: false },
    ],
    availableLen: function () {
      return this.seat.filter((s) => s?.isBooked !== true)?.length;
    },
    selectedSeatsLen: function () {
      return this.seat.filter((s) => s?.isChecked === true)?.length;
    },
  },
];
