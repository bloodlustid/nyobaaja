var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Gu9K-0oULQ9eoaDcK_ODRX4MCjBTiQK2raQlUUd2cb4/pubhtml';

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  });
}

function showInfo(data) {
  var tableBody = '';
  data.forEach(function(entry) {
    tableBody += '<tr>';
    tableBody += '<td>' + entry.nomor + '</td>';
    tableBody += '<td>' + entry.nama + '</td>';
    tableBody += '<td>' + entry.kegiatan + '</td>';
    tableBody += '<td>' + entry.tahun + '</td>';
    tableBody += '</tr>';
  });
  $('#certTable tbody').html(tableBody);
  $('#certTable').DataTable();
}

window.addEventListener('DOMContentLoaded', init);