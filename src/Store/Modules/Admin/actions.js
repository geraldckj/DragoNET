export default{
    async createNewEvent(_, payload){
        //push event info into firebase db
        console.log(payload)
        const response = await fetch(
            `https://dragonet-8888-default-rtdb.asia-southeast1.firebasedatabase.app/allEvents.json`,
            {
                method:'POST', 
                body: JSON.stringify({
                    eventTitle: payload.eventTitle,
                    eventDesc: payload.eventDesc,
                    eventDate: payload.eventDate,
                    eventTime: payload.eventTime,
                    eventLocation: payload.eventLocation,
                    eventCategory: payload.eventCategory,
                    eventStatus: payload.eventStatus,
                    createdBy: payload.createdBy,
                })
            }
        )

        const responseData = await response.json();
        
        if (!response.ok){
            const error = new Error(
                responseData.message || 'Error adding Event, try again later'
            );
            throw error;
        }

    },
};