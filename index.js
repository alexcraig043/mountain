var start = 0;

function setup()
{
    createCanvas(windowWidth, windowHeight);
}

function draw()
{
    background(51);
    noFill();
    stroke(255);

    var inc = .005;
    var scrollSpeed = .03
    var yoff = start;
    var y;

    beginShape();
    for (var x = 0; x < width; x++)
    {
        y = noise(yoff) * height;
        vertex(x, y);

        stroke(135, 206, 235);
        line(x, 0, x, y);
        stroke(255);
        line(x, y, x, y + height / 5);

        yoff += inc;
    }
    endShape();
    start += scrollSpeed;
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}