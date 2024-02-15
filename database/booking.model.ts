import { Schema, model } from 'mongoose';

export interface IBooking {
    type: string;
}

const bookingSchema = new Schema({
    type: { type: String, required: true },
})

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;
