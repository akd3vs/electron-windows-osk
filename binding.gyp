{
  "targets": [
    {
      "win_delay_load_hook": "true",
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "target_name": "addon",
      "sources": [ "main.cpp" ]
    }
  ]
}
