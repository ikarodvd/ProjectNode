import { Appointment } from "../../entities/appointment";
import { areIntervalsOverlapping } from "date-fns";
import { AppointmentsRepository } from "../appoinments-repository";
export class InMemoryAppointmentsRepository implements AppointmentsRepository{
    create(appointment: Appointment): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public items: Appointment[]=[]
    
    async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overlappingAppointment = this.items.find(appointment =>{
            return areIntervalsOverlapping(
                {start: startsAt, end:endsAt},
                {start: appointment.startAt, end: appointment.endsAt},
                {inclusive: true}
                )
        })
        if(!overlappingAppointment){
            return null
        }
        return overlappingAppointment 
    }
    
    
  
}