document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function(info) {
            // Vous pouvez ajouter une logique supplémentaire ici, comme l'ouverture d'une fenêtre modale pour la réservation
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
            },
            {
                title: 'Pasta preparation and cooking workshop',
                start: '2024-06-25',
                end: '2024-06-25'
            },
            {
                title: 'Couple cooking workshop',
                start: '2024-09-12',
                end: '2024-09-12'
            }
        ]
    });

    calendar.render();
});
