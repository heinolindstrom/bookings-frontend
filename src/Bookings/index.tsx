import Bookings from './Bookings';
import BookingTable from './BookingTable';
import Pagination from './Pagination';
import { getAll } from './helper';

const ITEMS_ON_PAGE = 10;

interface IParticipant {
  name: string;
  email: string;
}

interface IBooking {
  id: number;
  created_at: Date;
  email: string;
  venue_name: string;
  people: IParticipant[];
  price: number;
}

interface IBookingResult {
  bookings: IBooking[];
  count: number;
}

export { getAll, BookingTable, Pagination, ITEMS_ON_PAGE };
export type { IParticipant, IBooking, IBookingResult };
export default Bookings;
