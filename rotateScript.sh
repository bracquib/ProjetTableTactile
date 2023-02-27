orientation=$(xrandr -q --verbose | grep eDP-1 | sed 's/primary //' | awk '{print $5}' )
case $orientation in
  normal)
    xrandr -o left
    coords="0 -1 1 1 0 0 0 0 1"
    ;;

  left)
    xrandr -o inverted
    coords="-1 0 1 0 -1 1 0 0 1"
    ;;

  inverted)
    xrandr -o right
    coords="0 1 0 -1 0 1 0 0 1"
    ;;

  right)
    xrandr -o normal
    coords="0 0 0 0 0 0 0 0 0"
    ;;
  *)
  	echo -n "Orientation inconnue"
  	;;
esac

xinput set-prop "eGalaxTouch Virtual Device for Touch" --type=float "Coordinate Transformation Matrix" $coords #modify this line with your own touch driver
xinput set-prop "eGalaxTouch Virtual Device for Single" --type=float "Coordinate Transformation Matrix" $coords
