let random_num = "";
let solve_pos = {};
let main_input;
let main_input_pos = {};

let true_pos = 0;
let false_pos = 0;
let false_in = 0;

function random_num_gen(){
    for(i = 0; i < 4; i++){
        let digit = Math.floor(Math.random() * 10).toString();
        random_num += digit;
        solve_pos[i] = digit;
    }
    console.log(random_num);
    console.log(solve_pos);
}

random_num_gen();

function main_input_pos_func() {
        main_input = document.getElementById("main_input").value;
        for(i = 0; i < 4; i++){
            let digit2 = main_input[i]
            main_input_pos[i] = digit2;
        }
        console.log(main_input);
        console.log(main_input_pos);
}


function check(){
    main_input_pos_func();
    for (i = 0; i < 4; i++){
        if (main_input_pos[i] === solve_pos[i]){
            true_pos += 1;
        }
        else if (random_num.includes(main_input_pos[i])){
            false_pos += 1;
        }
        else {
            false_in += 1;
        }
    }
    document.getElementById("message").innerHTML = `Correct Pos: ${true_pos}, Wrong Pos: ${false_pos}, Wrong Num: ${false_in}`;
    document.getElementById("display").innerHTML = `${main_input[0]} ${main_input[1]} ${main_input[2]} ${main_input[3]}`;
    erase_game_status();


}

function erase_game_status(){
    true_pos = 0;
    false_pos = 0;
    false_in = 0;
}
