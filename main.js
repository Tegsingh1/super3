if(keypressed == '70' )
{
    new_image("");
    console.log("f");
}

if(keypressed == '66' )
{
    new_image("");
    console.log("b");
}

if(keypressed == '76' )
{
    new_image("");
    console.log("l");
}

if(keypressed == '82' )
{
    new_image("");
    console.log("r");
}
if(keypressed == '72' )
{
    new_image("");
    console.log("h");
}
if(keypressed == '38' )
{
    up();
    console.log("f");
}

function up()
{
    if([player_y >=0)
        {
            player_y = player_y - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("when up arrow is pressed, X = " + player_x + " , Y + " player_y);
            canvas.remove(player_object);
            player_update();
            
        }
}
