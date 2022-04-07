import React, { useEffect, useState } from 'react';
import {
  getAll,
  BookingTable,
  Pagination,
  ITEMS_ON_PAGE,
  IBookingResult,
} from '.';

const getBookings = async (email: string, offset: number) => {
  const bookings = getAll(email, offset) as unknown as IBookingResult;
  return bookings;
};

type BookingsProps = {
  email: string;
};

const Bookings = ({ email }: BookingsProps): JSX.Element => {
  const [bookingsResult, setBookings] = useState<IBookingResult>();
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setBookings(await getBookings(email, offset));
    };
    fetchData();
  }, [email, offset]);

  if (!bookingsResult) {
    return <div>Loading ⏳</div>;
  }

  return (
    <div>
      <h1>Bookings</h1>
      <BookingTable bookings={bookingsResult.bookings} />
      <Pagination
        offset={offset}
        count={bookingsResult.count}
        itemsOnPage={ITEMS_ON_PAGE}
        setOffset={(offset: number) => setOffset(offset)}
      />
    </div>
  );
};

export default Bookings;
