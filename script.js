function expandirBox(nome) {
    const container = document.querySelector(`.box-${nome}`);
    container.classList.toggle('expandido');
}

document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('seuCalendario');

    function renderCalendar() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

        let calendarHTML = '<table>';
        calendarHTML += '<tr><th>Domingo</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th><th>Sábado</th></tr><tr>';

        let dayCount = 1;

        for (let i = 0; i < 42; i++) {
            if (i < firstDayOfMonth || dayCount > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                calendarHTML += `<td>${dayCount}</td>`;
                dayCount++;
            }

            if (i % 7 === 6 && i < 41) {
                calendarHTML += '</tr><tr>';
            }
        }

        calendarHTML += '</tr></table>';

        calendarContainer.innerHTML = calendarHTML;
    }

    renderCalendar();
});