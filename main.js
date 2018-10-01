var board = new Array(); //每个格子的数字
var score = 0;//分数
var has_conflicted = new Array();//解决连续消除的标记
var startx = 0;//移动端触摸屏幕时开始点的x坐标;
var starty = 0;//移动端触摸屏幕时开始点的y坐标;
var endx = 0;//移动端触摸屏幕时结束点的x坐标
var endy = 0;//移动端触摸屏幕时结束点的y坐标
var success_string="Success";
var gameover_string = 'GameOver';

//html文档加载完成后，开始初始化棋盘
#(document).ready(function() {
	//做自适应处理
	prepare_for_mobile();
	new_game();
})

//开始新游戏
function new_game() {
	//初始化棋盘
	init();
	generate_one_number();
	generate_one_number();
}

//初始化
function init() {
	for (let i=0;i<4;i++) {
		for (let j=0;j<4;j++) {
			var grid_cell = $('$grid_cell'+i+'_'+j);
			grid_cell.css('top',get_pos_top(i,j));
			grid_cell.css('left',get_pos_left(i,j));
		}
	}
	for (let i=0;i<4;i++) {
		board[i] = new Array();
		has_conflicted = new Array();
		for (let j=0;j<4;j++) {
			board[i][j] = 0;
			has_conflicted[i][j] = false;
		}
	}
	update_board_view();
	score=0;
	update_score(score);
}

//更新棋盘
function update_board_view() {
	$('.number_cell').remove();
	for (let i=0;i<4;i++) {
		for (let j=0;j<4;j++) {
			$('#grid_container').append('<div class="number_cell" id="number_cell'+i+"_"+j+'""></div>');
			var number_cell = $("#number_cell_"+i+"_"+j);
			if (board[i][j] ==0) {
				
			}			
		}
	}
}
