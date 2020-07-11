/**
 * Selecting Element
 *
 * querySelector, querySelectorAll 대신
 * d3.select(), d3.selectAll()를 사용하면 해당 엘리먼트를 d3 래퍼 엘리먼트로 반환한다.
 */
const canvas1 = document.querySelector(".canvas");
const canvas2 = d3.select(".canvas");
console.group("document.querySelector와 d3.select() 리턴값 차이");
console.log("document.querySelector:", canvas1);
console.log("d3.select():", canvas2);
console.groupEnd();

/**
 * Appending Element and Adding Attibutes
 */
const canvas = d3.select(".canvas");

// prettier-ignore
const svg = canvas.append("svg")
  .attr("width", 600)
  .attr("height", 600);

/**
 * Group
 */
// prettier-ignore
const group = svg.append("g")
  .attr('transform', 'translate(0, 100)');

// prettier-ignore
group.append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", 'blue')
  .attr("x", 20)
  .attr("y", 20);

// prettier-ignore
group.append("circle")
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("r", 50)
  .attr("fill", 'pink');

// prettier-ignore
group.append("line")
  .attr("x1", 370)
  .attr("x2", 400)
  .attr("y1", 20)
  .attr("y2", 120)
  .attr("stroke", 'gray');

// prettier-ignore
svg.append('text')
  .attr('x', 20)
  .attr('y', 200)
  .attr('fill', 'gray')
  .text('hello, svg!')
  .style('font-fmaily', 'arial');
