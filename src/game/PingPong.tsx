import { useEffect, useRef } from 'react';
// import React, { useEffect, useRef } from 'react';
// import Canvas from 'react-responsive-canvas'


// const   PureCanvas = React.forwardRef((props, ref) => <canvas ref={ref}  />);


export const Game = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scoreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth / 1.5;
                canvas.height = window.innerHeight / 2;
            }
        };

        const draw = () => {
            if (context && canvas) {
                const paddleHeight = canvas.height * 0.2;
                const paddleWidth = canvas.width * 0.02;
                const rightPaddleY = canvas.height / 2 - paddleHeight / 2;
                const leftPaddleY = canvas.height / 2 - paddleHeight / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = 'rgba(4,59,92,0.4)';
                context.fillRect(0, 0, canvas.width, canvas.height);
                
                context.beginPath();
                context.moveTo(canvas.width / 2, 10);
                context.lineTo(canvas.width / 2, canvas.height - 10);
                context.strokeStyle = 'white';
                context.lineWidth = 2;
                context.setLineDash([15, 15]);
                context.stroke();
                context.closePath();
                
                // context.beginPath();
                // context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
                // context.fillStyle = 'red';
                // context.fill();
                // context.closePath();
                
                context.fillStyle = 'white';
                context.fillRect(0,leftPaddleY,paddleWidth,paddleHeight);
                context.fillRect(canvas.width-paddleWidth,rightPaddleY,paddleWidth,paddleHeight);

            }
        };

        resizeCanvas();
        // draw();
// start
  let xCoordinate = canvas?.width / 2;

  const drawMovingCircle = () => {
    // Clear the entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    draw();

    // Draw the circle at the updated X-coordinate
    context.beginPath();
    context.arc(xCoordinate, canvas.height / 2, 5, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();

    // Move the circle to the right (you can adjust the value for the desired speed)
    xCoordinate += 2;

    // Request the next animation frame
    requestAnimationFrame(drawMovingCircle);
  }

  // Start the animation
  drawMovingCircle();
// end
        window.addEventListener('resize', () => {
            resizeCanvas();
            draw();
        });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
      return (<div className="w-full bg-cyan-600 flex justify-center items-center h-screen" >
             <div ref={scoreRef} className='absolute top-0 left-0 right-0 text-center text-4xl text-white'>0</div>
             {/* <Canvas canvasRef={el => (this.canvas = el)} onResize={this.draw}  */}
             <canvas  className=' border-8 rounded-2xl border-l-indigo-900 border-r-indigo-900 border-t-black border-b-black ' ref={canvasRef} />
         </div>
         );
};

