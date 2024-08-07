import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

const Calendar = () => {



    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
                initialView={'dayGridMonth'}
                headerToolbar={{
                    start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
                    center: 'title',
                    end: 'dayGridMonth,timeGridDay,timeGridWeek,listWeek' // will normally be on the right. if RTL, will be on the left
                }}
                events={[
                    { title: "his birthday", date: "2024-08-13" },
                    { title: "event 2", date: "2024-08-07" }
                ]}
                height={"90vh"}
                selectable= {true}
                dateClick={function(info) {
                    alert('Clicked on: ' + info.dateStr );
                    alert('Enter the title:')
                    // change the day's background color just for fun
                    info.dayEl.style.backgroundColor = 'red';
                  }}
            />
        </div>
    );
}

export default Calendar;
