import React, { useEffect, useRef } from 'react';
import Canvas from 'react-responsive-canvas'


// const   PureCanvas = React.forwardRef((props, ref) => <canvas ref={ref}  />);

export const Game = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scoreRef = useRef<HTMLDivElement>(null);
    const imageUrl = '../assets/bg.png';


    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        const paddleHeight = 80;
        const paddleWidth = 10;
        // var paddleSpeed = 10;
        if (context && canvas) {
            const rightPaddleY = canvas.height / 2 - paddleHeight / 2;
            const leftPaddleY = canvas.height / 2 - paddleHeight / 2;

            // context.filter = 'blur(30rem)';
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

            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
            context.fillStyle = 'red';
            context.fill();
            context.closePath();

            context.fillStyle = 'white';
            context.fillRect(0,leftPaddleY,paddleWidth,paddleHeight);
            context.fillRect(canvas.width-paddleWidth,rightPaddleY,paddleWidth,paddleHeight);
        }
    }, []);

    // const linearGradient = 'linear-gradient( red, yellow)'
    // style={{ borderImage : linearGradient}}  className='border-8 rounded-2xl '
    return (<div className="w-full bg-cyan-600 flex justify-center items-center h-screen" >
        <div ref={scoreRef} className='absolute top-0 left-0 right-0 text-center text-4xl text-white'>0</div>
        {/* <Canvas canvasRef={el => (this.canvas = el)} onResize={this.draw}  */}
        <canvas  className=' border-8 rounded-2xl border-l-indigo-900 border-r-indigo-900 border-t-black border-b-black ' ref={canvasRef}  width={900} height={500} />
    </div>
    );
}

// export default game