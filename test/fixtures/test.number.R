options( digits = 16 )
library( jsonlite )
library( VGAM )

sigma = 2
x = c( -5, -2.5, 0, 2.5, 5 )
y = drayleigh( x, sigma )

cat( y, sep = ",\n" )

data = list(
	sigma = sigma,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
