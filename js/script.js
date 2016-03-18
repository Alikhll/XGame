var User = 0;
var selectedSections = [];
function overOnSection(section) {
    for (var i = 0; i < selectedSections.length; i++) {
        if (section == selectedSections[i].item)
            return;
    }
    if (User == 0) {
        $('#' + section).css('background-color', 'red');
    }
    else {
        $('#' + section).css('background-color', 'blue');
    }
};
function outOnSection(section) {
    for (var i = 0; i < selectedSections.length; i++) {
        if (section == selectedSections[i].item)
            return;
    }
    $('#' + section).css('background-color', 'gray');
}
function clickSection(section) {
    for (var i = 0; i < selectedSections.length; i++) {
        if (section == selectedSections[i].item)
            return;
    }
    selectedSections.push({ user: User, item: section });

    var end = endGame(selectedSections);
    if (typeof end != 'undefined' && end.win == true) {

        var person = User == 0 ? 'Red' : 'Blue';
        
		if(end.item == 'row1')
		{
			$('#i1,#i2,#i3').css('background-color','gold');
		}
		else if(end.item == 'row2')
		{
			$('#i4,#i5,#i6').css('background-color','gold');
		}
		else if(end.item == 'row3')
		{
			$('#i7,#i8,#i9').css('background-color','gold');
		}
		else if(end.item == 'col1')
		{
			$('#i1,#i4,#i7').css('background-color','gold');
		}
		else if(end.item == 'col2')
		{
			$('#i2,#i5,#i8').css('background-color','gold');
		}
		else if(end.item == 'col3')
		{
			$('#i3,#i6,#i9').css('background-color','gold');
		}
		else if(end.item == 'x1')
		{
			$('#i1,#i5,#i9').css('background-color','gold');
		}
		else if(end.item == 'x2')
		{
			$('#i3,#i5,#i7').css('background-color','gold');
		}
		
		alert(person + ' Win!\nTry again');
		
        selectedSections = [];
        debugger;
        var data = $("table td").siblings();
        $("table td").siblings().removeClass('red').removeClass('blue');
        $("table td").siblings().removeAttr('style');

        return;
    }

    if (User == 0) {
        var a = $('#' + section).addClass('red');
    }
    else {
        $('#' + section).addClass('blue');
    }
    User = User == 0 ? 1 : 0;
}

function endGame(array) {
    var row1 = [];
    var row2 = [];
    var row3 = [];
    var col1 = [];
    var col2 = [];
    var col3 = [];
    var x1 = [];
    var x2 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].item == 'i1' || array[i].item == 'i2' || array[i].item == 'i3')
            row1.push(array[i]);
        if (array[i].item == 'i4' || array[i].item == 'i5' || array[i].item == 'i6')
            row2.push(array[i]);
        if (array[i].item == 'i7' || array[i].item == 'i8' || array[i].item == 'i9')
            row3.push(array[i]);
        if (array[i].item == 'i1' || array[i].item == 'i4' || array[i].item == 'i7')
            col1.push(array[i]);
        if (array[i].item == 'i2' || array[i].item == 'i5' || array[i].item == 'i8')
            col2.push(array[i]);
        if (array[i].item == 'i3' || array[i].item == 'i6' || array[i].item == 'i9')
            col3.push(array[i]);
        if (array[i].item == 'i1' || array[i].item == 'i5' || array[i].item == 'i9')
            x1.push(array[i]);
        if (array[i].item == 'i3' || array[i].item == 'i5' || array[i].item == 'i7')
            x2.push(array[i]);
    }

    if (row1.length == 3) {
        if (row1[0].user == row1[1].user && row1[1].user == row1[2].user) {
            return { win: true, item: 'row1' };
        }
    }
    if (row2.length == 3) {
        if (row2[0].user == row2[1].user && row2[1].user == row2[2].user) {
            return { win: true, item: 'row2' };
        }
    }
    if (row3.length == 3) {
        if (row3[0].user == row3[1].user && row3[1].user == row3[2].user) {
            return { win: true, item: 'row3' };
        }
    }
    if (col1.length == 3) {
        if (col1[0].user == col1[1].user && col1[1].user == col1[2].user) {
            return { win: true, item: 'col1' };
        }
    }
    if (col2.length == 3) {
        if (col2[0].user == col2[1].user && col2[1].user == col2[2].user) {
            return { win: true, item: 'col2' };
        }
    }
    if (col3.length == 3) {
        if (col3[0].user == col3[1].user && col3[1].user == col3[2].user) {
            return { win: true, item: 'col3' };
        }
    }
    if (x1.length == 3) {
        if (x1[0].user == x1[1].user && x1[1].user == x1[2].user) {
            return { win: true, item: 'x1' };
        }
    }
    if (x2.length == 3) {
        if (x2[0].user == x2[1].user && x2[1].user == x2[2].user) {
            return { win: true, item: 'x2' };
        }
    }
};