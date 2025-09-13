function drawCube() {
      const length = parseInt(document.getElementById("length").value);
        const width = parseInt(document.getElementById("width").value);
          const height = parseInt(document.getElementById("height").value);

            const canvas = document.getElementById("cubeCanvas");
              const ctx = canvas.getContext("2d");

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                  // starting position
                    const startX = 200;
                      const startY = 150;

                        // front face
                          const front = [
                              { x: startX, y: startY },
                                  { x: startX + length, y: startY },
                                      { x: startX + length, y: startY + height },
                                          { x: startX, y: startY + height }
                                            ];

                                              // back face (shifted by width and up a bit for isometric effect)
                                                const back = [
                                                    { x: startX + width, y: startY - width / 2 },
                                                        { x: startX + length + width, y: startY - width / 2 },
                                                            { x: startX + length + width, y: startY + height - width / 2 },
                                                                { x: startX + width, y: startY + height - width / 2 }
                                                                  ];

                                                                    // draw front
                                                                      ctx.beginPath();
                                                                        ctx.moveTo(front[0].x, front[0].y);
                                                                          ctx.lineTo(front[1].x, front[1].y);
                                                                            ctx.lineTo(front[2].x, front[2].y);
                                                                              ctx.lineTo(front[3].x, front[3].y);
                                                                                ctx.closePath();
                                                                                  ctx.stroke();

                                                                                    // draw back
                                                                                      ctx.beginPath();
                                                                                        ctx.moveTo(back[0].x, back[0].y);
                                                                                          ctx.lineTo(back[1].x, back[1].y);
                                                                                            ctx.lineTo(back[2].x, back[2].y);
                                                                                              ctx.lineTo(back[3].x, back[3].y);
                                                                                                ctx.closePath();
                                                                                                  ctx.stroke();

                                                                                                    // connect corners (manual instead of loop)
                                                                                                      ctx.beginPath();
                                                                                                        ctx.moveTo(front[0].x, front[0].y);
                                                                                                          ctx.lineTo(back[0].x, back[0].y);
                                                                                                            ctx.stroke();

                                                                                                              ctx.beginPath();
                                                                                                                ctx.moveTo(front[1].x, front[1].y);
                                                                                                                  ctx.lineTo(back[1].x, back[1].y);
                                                                                                                    ctx.stroke();

                                                                                                                      ctx.beginPath();
                                                                                                                        ctx.moveTo(front[2].x, front[2].y);
                                                                                                                          ctx.lineTo(back[2].x, back[2].y);
                                                                                                                            ctx.stroke();

                                                                                                                              ctx.beginPath();
                                                                                                                                ctx.moveTo(front[3].x, front[3].y);
                                                                                                                                  ctx.lineTo(back[3].x, back[3].y);
                                                                                                                                    ctx.stroke();
                                                                                                                                    }
}