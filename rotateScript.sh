orientation=$(xrandr -q --verbose | grep eDP-1 | sed 's/primary //' | awk '{print $5}' )
case $orientation in
  normal)
    xrandr -o left
    ;;

  left)
    xrandr -o inverted
    ;;

  inverted)
    xrandr -o right
    ;;

  right)
    xrandr -o normal
    ;;
  *)
  	echo -n "Orientation inconnue"
  	;;
esac

