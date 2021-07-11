// @ts-nocheck
import React, { useRef, useEffect, useState } from "react";
const { floor, random } = Math;

export default function Canvas() {
	const canvasRef = useRef(null);
	const [context, setContext] = useState(null);

	useEffect(() => {
		let droplets = [];

		function randomBetween(max = 1, min = 0) {
			return floor(random() * (max - min)) + min;
		}

		function makeDroplet() {
			let x;
			let y;
			let length = randomBetween(7, 4);

			//Rain from the top 8 out of 10 times§
			if (random() < 0.8) {
				x = random() * canvasRef.current.width;
				y = -length;
			} else {
				x = canvasRef.current.width;
				y = random() * canvasRef.current.height;
			}

			return {
				x,
				y,
				length,
				velocityX: -4 + randomBetween(3, 2),
				velocityY: randomBetween(13, 7),
			};
		}

		function animate() {
			context.clearRect(
				0,
				0,
				canvasRef.current.width,
				canvasRef.current.height
			);

			droplets.forEach((droplet, index) => {
				const { x, y, length, velocityX, velocityY } = droplet;

				context.beginPath();
				context.moveTo(x, y);
				context.lineTo(x + velocityX * length, y + velocityY * length);
				context.strokeStyle = `rgba(162, 162, 162, ${
					velocityY > 9 ? 0.6 : 0.2
				})`;
				context.stroke();

				droplet.x += velocityX;
				droplet.y += velocityY;

				if (y > canvasRef.current.height || x < 0) {
					droplets[index] = makeDroplet();
				}
			});

			requestAnimationFrame(animate);
		}

		function handleResize() {
			if (window.innerWidth > 450 && droplets.length !== 150) {
				let tempArr = [];

				for (let i = 0; i < 100; i++) {
					tempArr.push(makeDroplet());
				}

				droplets.push(...tempArr);
			} else if (window.innerWidth < 450 && droplets.length !== 50) {
				droplets.splice(49, 100);
			}

			if (window.innerHeight > 667) {
				canvasRef.current.height = window.innerHeight;
			} else {
				canvasRef.current.height = 667;
			}

			canvasRef.current.width = window.outerWidth;
		}

		if (canvasRef.current) {
			const renderCtx = canvasRef.current.getContext("2d");

			if (renderCtx) {
				setContext(renderCtx);
			}
		}

		if (context) {
			if (window.innerHeight > 667) {
				canvasRef.current.height = window.innerHeight;
			} else {
				canvasRef.current.height = 667;
			}
			canvasRef.current.width = window.outerWidth;

			if (window.innerWidth < 450) {
				for (let x = 0; x < 50; x++) {
					droplets.push(makeDroplet());
				}
			} else {
				for (let x = 0; x < 150; x++) {
					droplets.push(makeDroplet());
				}
			}

			animate();

			//Resize event listener
			window.addEventListener("resize", handleResize);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [context]);

	return <canvas ref={canvasRef} id="deno-rain"></canvas>;
}
