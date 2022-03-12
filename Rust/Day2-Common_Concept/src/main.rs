fn main() {
    //Data Type(i, u, f, char, tuple)

    //signed = i, unsigned = u
    let a : i32 = -11;
    let a : u32 = 11;

    //Dec, Hex, Oct, Binary, Byte
    let a : i32 = 98_222;
    let a : i32 = 0xff;
    let a : i32 = 0o77;
    let a : i32 = 0b1111_0000;
    let a : u8 = b'a';
    //Tuple
    let tuple_a: (&str, i32) = ("Let's go", 100);
    let (str_a, count) = tuple_a;

    //Array
    let ary_a : [i32;10] = [0; 10];

    //Fn
    println!("{}", my_function(100, 200));

    //Control
    if a > 0 {
        println!("{}", a);
    }

    let a = if a == 0 { 5 } else {11};

    //Loop and Loop Return and Loop Name Break
    let value = loop{
        println!("Again Loop");
        break 10;
    };
    println!("loop return value : {}", value);

    'outer_loop : loop{
        'inner_loop : loop {
            println!("Welcome Inner Loop!");
            break 'outer_loop;
        }
    }

    //Iter
    for ele in ary_a.iter(){
        println!("{}", ele);
    }
    for num in 1..5{
        println!("{}", num);
    }
}


fn my_function(x : i32, y : i32) -> i32{
    (x + y)
}