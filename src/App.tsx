import { useState } from "react"
import { bookingDummyData, type BookingData } from "./data/bookingData"

const App = () => {

  const [booking, setBooking] = useState<BookingData[]>(bookingDummyData)
  const [mySeatsArr, setMySeatArr] = useState<string[]>([])

  const selectSeat = (index: number, seatNum: number) => {
    const updateBookingArr = booking.map((b, i) => {
      if (i === index) {
        const updateSeat = b.seat.map((s) => {
          if (s.number === seatNum) {
            return {
              ...s,
              isChecked: !s.isChecked
            }
          }
          else {
            return { ...s }
          }
        })
        return { ...b, seat: updateSeat }
      } else {
        return { ...b }
      }
    })
    setBooking(updateBookingArr)

    const singleBookingSeats = updateBookingArr[index].seat.find(
      (d) => d.number === seatNum
    )?.number;

    if (!singleBookingSeats) return;

    const seatNameWithNum = updateBookingArr[index].label + String(singleBookingSeats);

    setMySeatArr((prevSeats) => {
      if (prevSeats?.includes(seatNameWithNum)) {
        // already selected → remove
        return prevSeats.filter((d) => d !== seatNameWithNum);
      } else {
        // not selected → add
        return [...prevSeats as string[], seatNameWithNum];
      }
    });
  }

  const handleBooking = () => {
    const updateBookingArr = booking.map((b) => ({
      ...b,
      seat: b.seat.map((s) => ({
        ...s,
        className: s.isChecked ? "bg-gray-500 text-white" : s.className,
        isBooked: s.isChecked ? true : s.isBooked
      }))

    }))
    setBooking(updateBookingArr)
    alert('Your seats are booked')
    return
  }



  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center py-20">
      <p className="text-[30px] text-black"> Cinema  Booking</p>

      <div className="w-[80%] border rounded-2xl h-fit py-5 flex flex-col gap-10 ">
        {
          booking.map((b, i) => (
            <div key={i} className="grid grid-cols-12 px-4 gap-">
              <div className="col-span-2 ">
                <p className="text-black text-[20px]">{b?.category}</p>
              </div>
              <div className="col-span-7 flex justify-evenly">
                {
                  b?.seat?.map((s) =>
                    <button title={String(b.price) + ' RS./-'} onClick={() => selectSeat(i, s.number)} disabled={s?.isBooked} key={s.number} className={` ${!s?.isBooked && s?.isChecked ? 'bg-red-600' : s?.className} cursor-pointer  p-5 border rounded-2xl `}  >
                      <p>{b.label + s.number}</p>
                    </button>
                  )
                }
              </div>
              <div className="col-span-3 ">
                <p className="text-black text-[20px]">Available seat :  {b?.availableLen()}</p>
              </div>
            </div>
          ))
        }

        <div className="w-full grid grid-cols-12 px-5">
          <div className="col-span-3">
            Ultra Golden :  750 Rs/-
          </div>
          <div className="col-span-3">
            Golden : 550 Rs/-
          </div>
          <div className="col-span-3">
            Golden :  250 Rs/-
          </div>
          <div className="col-span-3">
            Golden :  100 Rs/-
          </div>
        </div>

        <div className="flex flex-col justify-evenly px-5">
          <p> Selected seats : {booking.reduce((acc, curr) => acc + curr.selectedSeatsLen(), 0)} ,  ( <span className="flex gap-4 w-[80%] flex-wrap"> {mySeatsArr?.map(m => <span key={m}>{m}</span>)} </span>) </p>
          <p> Total Price : Rs/- {booking.reduce((acc, curr) => acc + curr.selectedSeatsLen() * curr.price, 0)} </p>

          <button onClick={handleBooking} className="bg-red-500 text-white text-center rounded-2xl border my-3 py-3">Book Seats</button>
        </div>
      </div>
    </div>
  )
}

export default App