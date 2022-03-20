use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    //랜덤 문자 생성
    let secret_number = rand::thread_rng().gen_range(1, 101);
    println!("Secret Number is '{}'", secret_number);


    println!("Guess My Numbers : ");

    loop {
        //러스트에서는 기본적으로 변수는 불변임
        //mut를 붙임으로서, 가변으로 만들어줌
        let mut guess = String::new();

        io::stdin().read_line(&mut guess)
            .expect("Failed ot read line");

        let guess : u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        match guess.cmp(&secret_number) {
            Ordering::Less      => println!("TOO Small"),
            Ordering::Equal     => {println!("You Win"); break;},
            Ordering::Greater   => println!("TOO Big"),
        }
    }    
}
