import { IBooking, IParticipant } from '.';
import './table.css';

type BookingTableProps = {
  bookings: IBooking[];
};

const BookingTable = ({ bookings }: BookingTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Email</td>
          <td>Created</td>
          <td>Venue name</td>
          <td>People</td>
          <td>Event data</td>
          <td>Event duration</td>
          <td>Total Price</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b) => {
          return (
            <BookingRow
              createdAt={b.created_at}
              id={b.id}
              adminEmail={b.email}
              venueName={b.venue_name}
              people={b.people}
              duration={10}
              country="FIN"
              totalPrice={b.people.length * b.price}
            />
          );
        })}
      </tbody>
    </table>
  );
};
type BookingRowProps = {
  id: number;
  adminEmail: string;
  createdAt: Date;
  venueName: string;
  people: IParticipant[] | undefined;
  duration: number;
  totalPrice: number;
  country: string;
};

const BookingRow = ({
  adminEmail,
  createdAt,
  venueName,
  people,
  duration,
  totalPrice,
  country,
}: BookingRowProps) => {
  return (
    <tr>
      <td>{adminEmail}</td>
      <td>{createdAt}</td>
      <td>{venueName}</td>
      <td>{people?.join(', ')}</td>
      <td>-</td>
      <td>{duration} min</td>
      <td>{totalPrice} EUR</td>
      <td>{country}</td>
    </tr>
  );
};

export default BookingTable;
