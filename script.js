var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTV3kYH304COC1klZguny0vRDk_azLFPHlDP4tN2gImUMKeKzIRn256RAJZZiTJPDJLFyPaRpqBw8so/pubhtml?gid=0&single=true';

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