document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function (info) {
            alert('Date: ' + info.dateStr);
            // You can add additional logic here, such as opening a modal for booking
        },
        events: [
            {
                title: 'Cooking Workshop',
                start: '2024-06-21',
                end: '2024-06-21'
            },
            {
                title: 'Gluten-Free Cooking Class',
                start: '2024-09-12',
                end: '2024-09-12'
            }
        ]
    });

    calendar.render();
});
