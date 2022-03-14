
$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    
    //receive map tile from server
    socket.on('newtile', function (msg) {
        // change to receive full map view array
        console.log("Received tile " + msg.place + ' ' + msg.number);

        numbers_place = '#' + msg.place;
        numbers_string = msg.number;

        $(numbers_place).prop('src', numbers_string);
    });

    //receive user from server
    socket.on('newuser', function (msg) {
        // Change to add user details
        console.log("Received pair " + msg.place + ' ' + msg.number);

        numbers_place = '#' + msg.place;
        numbers_string = msg.number;
        $('#logX').html(numbers_string);
    });

    //receive status from server
    socket.on('status', function (msg) {
        // Change to add user details
        console.log("Received status " + msg.place + ' ' + msg.number);

        numbers_place = '#' + msg.place;
        numbers_string = msg.number;
        $('#status').html(numbers_string);
    });

    //receive sound from server
    socket.on('sound', function (msg) {
        // Change to add user details
        console.log("Received sound " + msg.place + ' ' + msg.number);
        var mySound = new sound(msg.place, msg.number);
        mySound.play();
    });

    $('#btn-up').on('click', function (e) {
        makeMove('forward');
    });
    $('#btn-down').on('click', function (e) {
        makeMove('fire');
    });
    $('#btn-left').on('click', function (e) {
        makeMove('left');
    });
    $('#btn-right').on('click', function (e) {
        makeMove('right');
    });
    $('#btn-clear').on('click', function (e) {
        makeMove('clear');
    });
    $('#btn-exit').on('click', function (e) {
        makeMove('exit');
    });
    // Quick and dirty code to handle the buttons rather than Googling for a wildcard solution
    $('#btn-1').on('click', function (e) {
        makeMove('1');
    });
    $('#btn-2').on('click', function (e) {
        makeMove('2');
    });
    $('#btn-3').on('click', function (e) {
        makeMove('3');
    });
    $('#btn-4').on('click', function (e) {
        makeMove('4');
    });
    $('#btn-5').on('click', function (e) {
        makeMove('5');
    });
    $('#btn-6').on('click', function (e) {
        makeMove('6');
    });
    $('#btn-7').on('click', function (e) {
        makeMove('7');
    });
    $('#btn-8').on('click', function (e) {
        makeMove('8');
    });
    $('#btn-9').on('click', function (e) {
        makeMove('9');
    });
  $('#btn-10').on('click', function (e) {
        makeMove('10');
    });
  $('#btn-11').on('click', function (e) {
        makeMove('11');
    });
  $('#btn-12').on('click', function (e) {
        makeMove('12');
    });
  $('#btn-13').on('click', function (e) {
        makeMove('13');
    });
  $('#btn-14').on('click', function (e) {
        makeMove('14');
    });
  $('#btn-15').on('click', function (e) {
        makeMove('15');
    });
  $('#btn-16').on('click', function (e) {
        makeMove('16');
    });
  $('#btn-17').on('click', function (e) {
        makeMove('17');
    });
  $('#btn-18').on('click', function (e) {
        makeMove('18');
    });
  $('#btn-19').on('click', function (e) {
        makeMove('19');
    });
  $('#btn-20').on('click', function (e) {
        makeMove('20');
    });
  $('#btn-21').on('click', function (e) {
        makeMove('21');
    });
  $('#btn-22').on('click', function (e) {
        makeMove('22');
    });
  $('#btn-23').on('click', function (e) {
        makeMove('23');
    });
  $('#btn-24').on('click', function (e) {
        makeMove('24');
    });
  $('#btn-25').on('click', function (e) {
        makeMove('25');
    });
  $('#btn-26').on('click', function (e) {
        makeMove('26');
    });
  $('#btn-27').on('click', function (e) {
        makeMove('27');
    });
  $('#btn-28').on('click', function (e) {
        makeMove('28');
    });
  $('#btn-29').on('click', function (e) {
        makeMove('29');
    });
  $('#btn-30').on('click', function (e) {
        makeMove('30');
    });
  $('#btn-31').on('click', function (e) {
        makeMove('31');
    });
  $('#btn-32').on('click', function (e) {
        makeMove('32');
    });
  $('#btn-33').on('click', function (e) {
        makeMove('33');
    });
  $('#btn-34').on('click', function (e) {
        makeMove('34');
    });
  $('#btn-35').on('click', function (e) {
        makeMove('35');
    });
  $('#btn-36').on('click', function (e) {
        makeMove('36');
    });
  $('#btn-37').on('click', function (e) {
        makeMove('37');
    });
  $('#btn-38').on('click', function (e) {
        makeMove('38');
    });
  $('#btn-39').on('click', function (e) {
        makeMove('39');
    });
  $('#btn-40').on('click', function (e) {
        makeMove('40');
    });
  $('#btn-41').on('click', function (e) {
        makeMove('41');
    });
  $('#btn-42').on('click', function (e) {
        makeMove('42');
    });
  $('#btn-43').on('click', function (e) {
        makeMove('43');
    });
  $('#btn-44').on('click', function (e) {
        makeMove('44');
    });
  $('#btn-45').on('click', function (e) {
        makeMove('45');
    });
  $('#btn-46').on('click', function (e) {
        makeMove('46');
    });
  $('#btn-47').on('click', function (e) {
        makeMove('47');
    });
  $('#btn-48').on('click', function (e) {
        makeMove('48');
    });
  $('#btn-49').on('click', function (e) {
        makeMove('49');
    });
  $('#btn-50').on('click', function (e) {
        makeMove('50');
    });
  $('#btn-51').on('click', function (e) {
        makeMove('51');
    });
  $('#btn-52').on('click', function (e) {
        makeMove('52');
    });
  $('#btn-53').on('click', function (e) {
        makeMove('53');
    });
  $('#btn-54').on('click', function (e) {
        makeMove('54');
    });
  $('#btn-55').on('click', function (e) {
        makeMove('55');
    });
  $('#btn-56').on('click', function (e) {
        makeMove('56');
    });
  $('#btn-57').on('click', function (e) {
        makeMove('57');
    });
  $('#btn-58').on('click', function (e) {
        makeMove('58');
    });
  $('#btn-59').on('click', function (e) {
        makeMove('59');
    });
  $('#btn-60').on('click', function (e) {
        makeMove('60');
    });
  $('#btn-61').on('click', function (e) {
        makeMove('61');
    });
  $('#btn-62').on('click', function (e) {
        makeMove('62');
    });
  $('#btn-63').on('click', function (e) {
        makeMove('63');
    });
  $('#btn-64').on('click', function (e) {
        makeMove('64');
    });
  $('#btn-65').on('click', function (e) {
        makeMove('65');
    });
  $('#btn-66').on('click', function (e) {
        makeMove('66');
    });
  $('#btn-67').on('click', function (e) {
        makeMove('67');
    });
  $('#btn-68').on('click', function (e) {
        makeMove('68');
    });
  $('#btn-69').on('click', function (e) {
        makeMove('69');
    });
  $('#btn-70').on('click', function (e) {
        makeMove('70');
    });
  $('#btn-71').on('click', function (e) {
        makeMove('71');
    });
  $('#btn-72').on('click', function (e) {
        makeMove('72');
    });
  $('#btn-73').on('click', function (e) {
        makeMove('73');
    });
  $('#btn-74').on('click', function (e) {
        makeMove('74');
    });
  $('#btn-75').on('click', function (e) {
        makeMove('75');
    });
  $('#btn-76').on('click', function (e) {
        makeMove('76');
    });
  $('#btn-77').on('click', function (e) {
        makeMove('77');
    });
  $('#btn-78').on('click', function (e) {
        makeMove('78');
    });
  $('#btn-79').on('click', function (e) {
        makeMove('79');
    });
  $('#btn-80').on('click', function (e) {
        makeMove('80');
    });
  $('#btn-81').on('click', function (e) {
        makeMove('81');
    });
  $('#btn-82').on('click', function (e) {
        makeMove('82');
    });
  $('#btn-83').on('click', function (e) {
        makeMove('83');
    });
  $('#btn-84').on('click', function (e) {
        makeMove('84');
    });
  $('#btn-85').on('click', function (e) {
        makeMove('85');
    });
  $('#btn-86').on('click', function (e) {
        makeMove('86');
    });
  $('#btn-87').on('click', function (e) {
        makeMove('87');
    });
  $('#btn-88').on('click', function (e) {
        makeMove('88');
    });
  $('#btn-89').on('click', function (e) {
        makeMove('89');
    });
  $('#btn-90').on('click', function (e) {
        makeMove('90');
    });
  $('#btn-91').on('click', function (e) {
        makeMove('91');
    });
  $('#btn-92').on('click', function (e) {
        makeMove('92');
    });
  $('#btn-93').on('click', function (e) {
        makeMove('93');
    });
  $('#btn-94').on('click', function (e) {
        makeMove('94');
    });
  $('#btn-95').on('click', function (e) {
        makeMove('95');
    });
  $('#btn-96').on('click', function (e) {
        makeMove('96');
    });
  $('#btn-97').on('click', function (e) {
        makeMove('97');
    });
  $('#btn-98').on('click', function (e) {
        makeMove('98');
    });
  $('#btn-99').on('click', function (e) {
        makeMove('99');
    });
  $('#btn-100').on('click', function (e) {
        makeMove('100');
    });
  $('#btn-101').on('click', function (e) {
        makeMove('101');
    });
  $('#btn-102').on('click', function (e) {
        makeMove('102');
    });
  $('#btn-103').on('click', function (e) {
        makeMove('103');
    });
  $('#btn-104').on('click', function (e) {
        makeMove('104');
    });
  $('#btn-105').on('click', function (e) {
        makeMove('105');
    });
  $('#btn-106').on('click', function (e) {
        makeMove('106');
    });
  $('#btn-107').on('click', function (e) {
        makeMove('107');
    });

    function makeMove(direction) {
        socket.emit('move', { direction: direction });
    }
});