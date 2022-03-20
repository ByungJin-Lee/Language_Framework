use std::io;

fn main(){
    let mut line: String = String::new();

    io::stdin().read_line(&mut line).expect("F");

    let tokens: Vec<&str> = line.trim().split(" ").collect();

    println!("{} {}", tokens[0], tokens[1]);

    let row : u32 = tokens[0].parse().expect("F");
    let col : u32 = tokens[1].parse().expect("F"); 

    println!("{} {}", row, col);
}
