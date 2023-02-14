function setup()
{
    canvas = createCanvas(800,600)
    canvas.center()

}

function preload()
{
    roblox_img = loadImage("r.png")
}

function draw()
{
    fill("red")
    stroke("black")
    circle(40,40,50)
    fill("green")
    stroke("black")
    rect(65,30,650,20)
    fill("red")
    stroke("black")
    circle(710,40,50)
    fill("green")
    stroke("black")
    rect(30,60,20,480)
    fill("red")
    stroke("black")
    circle(40,560,50)
    fill("green")
    stroke("black")
    rect(65,550,650,20)
    fill("red")
    stroke("black")
    circle(710,560,50)
    fill("green")
    stroke("black")
    rect(700,60,20,480)
    image(roblox_img,250,200)


}