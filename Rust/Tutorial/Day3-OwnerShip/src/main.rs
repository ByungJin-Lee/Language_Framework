fn main() {
    println!("Hello, world!");

    //Rust Using Block Scope
    {
        //Variable  
        let v1 = String::from("Hello");
    }   //Variables is no longer valid, scope is over

    //Copy Type int, uint etc...
    let x = 5;
    let y = x;
    //But String or someting OwnerShip move other;
    let s1 = String::from("Hello");
    let s2 = s1;

    //println!("{}", s1); //OwnerShip Over;
    takes_ownership(s2);
    //Now, s2 OwnerShip die;
    let s2 = String::from("Hello");
    borrow_ownership(&s2);
    println!("I can use s2 even now {}!", s2);
    
    //We need mutable Variable
    let mut s2_mut = String::from("Hello");
    borrow_and_update(&mut s2_mut);
    println!("{}", s2_mut);
}

fn takes_ownership(something : String){
    println!("{}'s OwnerShip Was Over!", something);
}

fn borrow_ownership(something : &String){
    println!("I borrow {}.", something);
}

fn borrow_and_update(something : &mut String){
    something.push_str("Update");
}
