player.onItemInteracted(DIAMOND_SWORD, function () {
    gameplay.setWeather(RAIN)
    mobs.spawn(CAT, pos(5, 10, 0))
})
player.onChat("run", function () {
	
})
