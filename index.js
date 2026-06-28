let random_num = "";
let solve_pos = {};
let main_input;
let main_input_pos = {};

let true_pos = 0;
let false_pos = 0;
let false_in = 0;
let tries = 8;
let in_check_stat = true;

function random_num_gen(){
      while (random_num.length < 4) {
        let digit = Math.floor(Math.random() * 10).toString();

        if (!random_num.includes(digit)) {
            random_num += digit;
        }
    }

    for (let i = 0; i < 4; i++) {
        solve_pos[i] = random_num[i];
    }
    // for(i = 0; i < 4; i++){
    //     let digit = Math.floor(Math.random() * 10).toString();
    //     random_num += digit;
    //     solve_pos[i] = digit;
    // }
    // console.log(random_num); // testing
    // console.log(solve_pos); // testing
}


function main_input_pos_func() {
    main_input = document.getElementById("main_input").value;
    let main_input_check = new Set();
    for (let x = 0; x < 4; x++) {
        let check_dig = main_input[x]
        main_input_check.add(check_dig);
    }
    if (!/^\d{4}$/.test(main_input)) {
        alert("Must use 4 digits only");
        in_check_stat = false;
        return;
    }
    if (main_input_check.size < 4 && main_input.length === 4) {
        alert("Can't use the same number more than once");
        in_check_stat = false;
        return;
    }
    else if (main_input.length !== 4){
        alert("The code must contain 4 digits");
        in_check_stat = false;
        return;
    }
    else {
        in_check_stat = true;
        for(let i = 0; i < 4; i++){
        let digit2 = main_input[i];
        main_input_pos[i] = digit2;
    }
    }

    //console.log(main_input); // testing
    // console.log(main_input_pos); //testing
}



function check(){
    main_input_pos_func();

    if (!in_check_stat) {
        return;
        }

    if (in_check_stat) {
        tries -= 1
        }
    if (main_input === random_num) {
        alert("You Won!");
        restart();
        return;
    }
    if (tries === 0) {
        alert(`Game Over. Correct Code: ${random_num}`)
        restart();
        return;
    }
        for (let i = 0; i < 4; i++) {
            if (main_input_pos[i] === solve_pos[i]) {
                true_pos += 1;
            } else if (random_num.includes(main_input_pos[i])) {
                false_pos += 1;
            } else {
                false_in += 1;
            }
        }
        document.getElementById("message").innerHTML = `Correct Pos: ${true_pos}, Wrong Pos: ${false_pos}, Wrong Num: ${false_in} tries left: ${tries}`;
        document.getElementById("display").innerHTML = `${main_input[0]} ${main_input[1]} ${main_input[2]} ${main_input[3]}`;
        erase_game_status();
}

function erase_game_status(){
    true_pos = 0;
    false_pos = 0;
    false_in = 0;
}


function restart(){
    random_num = "";
    solve_pos = {};
    main_input_pos = {};
    true_pos = 0;
    false_pos = 0;
    false_in = 0;
    tries = 8;
    in_check_stat = true;
    random_num_gen();
    document.getElementById("message").innerHTML = `Deduction is the key`;
    document.getElementById("display").innerHTML = `_ _ _ _`;

}

random_num_gen();
