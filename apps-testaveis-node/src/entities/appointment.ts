export interface AppointmentProps {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}
export class Appointment {
    private props: AppointmentProps

    get customer (){
        return this.props.customer
    }
    get startAt (){ 
        return this.props.startsAt
    }
    get endsAt (){
        return this.props.endsAt
    }

    constructor(props: AppointmentProps){
        const {startsAt, endsAt} = props
        if (endsAt <= new Date()){
            throw new Error('Invalid start date')
        }
        if(endsAt <= startsAt){
            throw new Error('Invalid end date')
        }
        this.props = props
    }

}