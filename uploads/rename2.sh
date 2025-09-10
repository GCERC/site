for file in *.pdf; do

  new_file=$(echo "$file" | sed -E 's/(__|_-_|-_)/_/g')
  if [ "$file" != "$new_file" ]; then
  mv "$file" "$new_file"
  echo "Renamed: $file -> $new_file"
  fi
done