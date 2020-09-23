<?php @require_once('header.php'); ?>

<section id="weather-app">

	<div id="app">

		<div id="left">

			<div id="top">

				<p id="the-day">Tuesday</p>
				<p id="date">10 Oct 2020</p>

				<div id="city">
					<p id="your-city">San Bernardino</p>
				</div>

				<div id="bottom">
					<img src="" alt="weather icon" id="w-icon">
					<p id="degrees">88&#176;F</p>
					<p id="desc">Sunny</p>
				</div>

			</div>
		</div><!-- end left -->


		<div id="right">

			<div id="info">

				<div id="labels">
					<p>PRECIPITATION</p>
					<p>HUMIDITY</p>
					<p>WIND</p>
				</div>

				<div id="nums">
					<p id="prec">0%</p>
					<p id="humid">34%</p>
					<p id="wind">0 km/h</p>
				</div>

			</div>


			<div id="days">

				<div id="day1" class="ds">
					<p>High</p>
					<p id="day1-abr">Low</p>
					<p id="day1-temp">29&#176;F</p>
				</div>

				<div id="day2" class="ds">
					<p>Low</p>
					<p id="day2-abr"></p>
					<p id="day2-temp">85&#176;F</p>
				</div>

				<div id="day3" class="ds">
					<p>Avg.</p>
					<p id="day3-abr">Average</p>
					<p id="day3-temp">82&#176;F</p>
				</div>

				<div id="day4" class="ds">
					<p>UV</p>
					<p id="day4-abr"></p>
					<p id="day4-temp">84&#176;F</p>
				</div>

			</div>

			<a href="" id="btn">Change location</a>

		</div>
	</div>

</section>

<?php @require_once('footer.php'); ?>