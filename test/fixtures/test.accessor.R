options( digits = 16 )
library( jsonlite )


sigma = 1
x = seq( -1000, 1000, 0.5 )
y = drayleigh( x, sigma )

cat( y, sep = ",\n" )

data = list(
	sigma = sigma,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
