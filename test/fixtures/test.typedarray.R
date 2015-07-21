options( digits = 16 )
library( jsonlite )
library( VGAM )

sigma = 1.4
x = seq( -1000, 1000, 0.5 )
y = drayleigh( x, sigma )

cat( y, sep = ",\n" )

data = list(
	sigma = sigma,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
