import axios from 'axios';
import { IBookingResult } from '.';

export const getAll = async (
  email: string,
  offset: number
): Promise<IBookingResult | undefined> => {
  try {
    const resp = await axios.get(
      `http://localhost:3030/api/bookings/${email}/${offset}`
    );
    console.log(resp.data);
    let data = resp.data as IBookingResult;

    return data;
  } catch (err) {
    console.error(err);
  }

  return undefined;
};
