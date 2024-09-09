window.BENCHMARK_DATA = {
  "lastUpdate": 1725894612036,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa",
          "message": "Make s3 client able to report read window offset (#971)\n\n* Make s3 client able to report read window offset\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update CHANGELOG.md\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-07T10:20:11Z",
          "tree_id": "3aa7e908d6ee4a317253b881303ff3b970bd4d27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa"
        },
        "date": 1723033649937,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1230.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2142.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 780.78408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1586.7796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 315.669140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 489.8416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.1890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.453515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3724.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3832.2306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 525.20888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1423.02314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1317.22900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 769.60703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1197.74501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1104.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1426.464453125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3cd7a187e8cff8967fb99d2b04492cb1c3cbd2f",
          "message": "Update NoSigningCredentials error message, add troubleshooting entry (#975)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-07T12:23:15Z",
          "tree_id": "693c7ffef8137f8b9475cbf602ca3957f3a47edb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3cd7a187e8cff8967fb99d2b04492cb1c3cbd2f"
        },
        "date": 1723041315599,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1224.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2096.59541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 772.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1578.95556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 353.43779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 432.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.71494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 244.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3882.619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4212.32236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 555.60556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1298.63828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1406.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.1822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1267.99794921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1145.22138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1145.115625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09a18544164920ed521d7d3d0084d3ea730ad97e",
          "message": "Refactor object part stream (#972)\n\n* Refactor object part stream\n\nVarious refactorings, including a new config type for object part stream\ntask, introducing structs for part composers, consolidating error handling\nflow in request reader and part composer.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T08:47:46Z",
          "tree_id": "1ca44780f09320a623c3374d0be807b2449c09c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a18544164920ed521d7d3d0084d3ea730ad97e"
        },
        "date": 1723200798354,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1228.06318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2055.7185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1572.23837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.68203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 461.96337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.9966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.55712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3985.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3959.1791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 557.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1267.79404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1284.91669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1543.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1274.36650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1155.38955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1331.57783203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "299f19ef4f684890ecac4a0bc9ce42f5930b734c",
          "message": "Add support for distributing requests over multiple NW interfaces behind feature flag (#943)\n\n* Add initial plumbing for multiple NIC support\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace comma-delimited network interfaces arg with bind arg\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-09T11:07:44Z",
          "tree_id": "23f251b355e25e8aed5e71f942b7b182f2496679",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/299f19ef4f684890ecac4a0bc9ce42f5930b734c"
        },
        "date": 1723209292452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.644921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2052.64697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.05751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1561.9369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 319.2828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.74013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.15234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3745.91484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4150.45341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 545.88544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1284.9025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1217.0681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 753.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1339.97919921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1122.4294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1298.06708984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8869934ec5710e52fcd0a985e76edd7e542ba466",
          "message": "Allow running install-dependencies script as root (#978)\n\nCurrently, we always run privilege commands in the script with `sudo`.\nThis makes the script unusable if running as the root user, which we\nmight want to do in some environments such as in a container.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T11:43:46Z",
          "tree_id": "a5421e592260249f902e2bb81a4ae7d2c11d42d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8869934ec5710e52fcd0a985e76edd7e542ba466"
        },
        "date": 1723211625605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1237.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2098.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.163671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1602.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 353.07392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 501.1935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 238.07080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.68466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3728.71064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3984.98623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 554.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1304.17275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1134.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1588.81240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1280.66171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1107.984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1432.74921875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "264d28e4bc8b96fcbdffd53dbb8a586d9433e932",
          "message": "Leverage async stream (#977)\n\n* Leverage async stream\n\nWhen reading data from `GetObject` request in `ObjectPartStream`, return\nthem as `Stream` instead of writing into a channel. This makes the flow\neasier to follow.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T17:19:04Z",
          "tree_id": "c9bbb1ff453bcd27521a7f2c6722d603d001768c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/264d28e4bc8b96fcbdffd53dbb8a586d9433e932"
        },
        "date": 1723231544282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1216.3103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2084.31328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.91904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1564.62509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 338.35322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 417.7681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 225.6638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.48505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3860.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4037.45732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 556.74814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1333.1953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1316.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.5240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1293.6095703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1171.1154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.08349609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7f78cc4f43c6dd7ab3b785b1fb6b795f4c38053e",
          "message": "Re-implement the prefetcher using backpressure mechanism (#980)\n\n* Re-implement the prefetcher using backpressure mechanism\n\nThe prefetcher now uses only one GetObject request to fetch data in advance.\nThis request has a range of entire object but use backpressure mechanism\nto control how much data it wants to fetch into the part queue instead of\nspawning up to two requests in parallel.\n\nThis should make the throughput more stable because previously the two\nrequest tasks could compete with each other when fetching data from S3.\nAlso, it will be easier to control how much data we want to store in the\npart queue.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix an issue where EmptyReadWindow error could be reported when request is already completed\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-15T14:57:15Z",
          "tree_id": "b2952c57ddd4db150fb3e0328da8e7fb508abd8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f78cc4f43c6dd7ab3b785b1fb6b795f4c38053e"
        },
        "date": 1723741175052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1984.61328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.49541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1368.54931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.15498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 490.99892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 211.973828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 225.44619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3540.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4183.92509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 911.218359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 858.0125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 741.89375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 742.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.5765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1205.54423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1011.5814453125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba5cfc3f4a64aba02b7e39db3ea9bffa46cab0f9",
          "message": "Run benchmarks on schedule (#983)\n\n* Store bench results in S3\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Use different prefixes for standard and express\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-19T20:17:08Z",
          "tree_id": "be264d6c54816137ec4cb1256fec0b61a1552287",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba5cfc3f4a64aba02b7e39db3ea9bffa46cab0f9"
        },
        "date": 1724106052795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.37138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1873.50419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 761.83828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1335.24267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 398.24033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 231.06767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3529.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4153.753515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 970.76552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 876.57626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 777.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 954.14111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1162.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1125.84208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1114.30869140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "13ab4d9332b611bd6f702e1c5462d13f97c467ef",
          "message": "Use separate bucket for bench results, run on PRs (#985)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-20T15:13:00Z",
          "tree_id": "70f577df0795fba77f6433164411c8df7cca7682",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13ab4d9332b611bd6f702e1c5462d13f97c467ef"
        },
        "date": 1724174276440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.84716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1965.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.3419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1341.15478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.12119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 508.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 213.44443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 223.86552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3430.01416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4024.27451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 964.26513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 862.01591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1249.46630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1325.15693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1211.8578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1062.28916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 975.77275390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2cb9c72e747097c32c0ed34a7d18ebabdf26871b",
          "message": "Start second request only if required (#984)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-22T12:53:50Z",
          "tree_id": "5ab8ff6340712fa17310471bb6a29568c70c3d13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2cb9c72e747097c32c0ed34a7d18ebabdf26871b"
        },
        "date": 1724338787271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1940.92529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.70732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1355.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.827734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 222.5505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3386.3556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4212.869921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 739.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 823.526171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1094.18388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1457.11591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1189.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1031.5904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1115.65205078125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "fd0bc1a55265c54f09bbce67c4429a6eef33ca28",
          "message": "Add `UNSTABLE_CACHE_KEY` environment variable (#990)\n\n* Add `UNSTABLE_CACHE_KEY` environment variable\n\nUsing `UNSTABLE_CACHE_KEY` allows users to specify a cache path disambiguator\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Format correctly\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Rename to `UNSTABLE_MOUNTPOINT_CACHE_KEY`\n\nTidy up cache_directory.rs\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make `ManagedCacheDir::new_from_parent_with_cache_key` take an `Option<OsString>`\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Add comment with explanation of functionality of cache_key\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Add more comments describing cache_key functionality\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Inline `create_cache_dir`\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Simplify `hash_cache_key`\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-08-29T09:42:20Z",
          "tree_id": "d73ae89ce7b0ac18fcd0bf76f614de3a7ee712a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd0bc1a55265c54f09bbce67c4429a6eef33ca28"
        },
        "date": 1724932057990,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1227.8294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1967.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.34267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1354.743359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 309.43583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 547.13115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.99658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 232.06025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3666.10556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3927.97275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 913.73857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 794.8103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1256.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1310.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1310.8201171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1078.05458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1264.88330078125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0f04ea4daa4f3fa68421c69b0179d09bae044d6c",
          "message": "Run bench once a day, no scheduled on forks, store commit id (#992)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-30T08:13:02Z",
          "tree_id": "d83d2ac7b9b97c9ba5464f64e51f334652136cee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f04ea4daa4f3fa68421c69b0179d09bae044d6c"
        },
        "date": 1725012995330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1237.0662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1960.33935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1380.5501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.38857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 557.9474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.7392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 231.4927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3329.159375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4057.98671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 822.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 870.81162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 855.03603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 756.24765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1334.7849609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1027.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1123.78369140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae4f909c8acfc3405ffb0be2f8f758ed25afe0ba",
          "message": "Update mountpoint-s3-crt-sys crate excludes to reduce package size (#989)\n\n* Update mountpoint-s3-crt-sys crate excludes to reduce package size\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert removal of aws-lc/ssl/\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-03T09:12:13Z",
          "tree_id": "f465761fd81eea74f40a2d4a6981df9722144b09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae4f909c8acfc3405ffb0be2f8f758ed25afe0ba"
        },
        "date": 1725362269463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1994.56357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 763.48056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1350.733203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.58837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 372.75615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.11669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 222.59970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3792.36220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4039.33564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 860.43203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 801.2712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1468.5974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 745.91943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1254.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.416796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1276.00224609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unexge@gmail.com",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3c371f3088d17cc8e35a06dcf0915416c9d067e1",
          "message": "Update CRT submodules to latest (#997)\n\n* Update mountpoint-s3-crt-sys crate excludes to reduce package size\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* WIP: Add testing for https://github.com/awslabs/mountpoint-s3/issues/927\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Gate scoped credential test\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update `test_credential_process_behind_source_profile` to use role\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Remove unused import\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Remove TODOs from CHANGELOG\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CRT submodules to latest\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Remove feature gate from `test_credential_process_behind_source_profile`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Fix Clippy failures\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* More Clippy fixes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Fix formatting\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update test failure message\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Burak <unexge@gmail.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak <unexge@gmail.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-09-04T17:03:50Z",
          "tree_id": "044619a5959658926d14fce236e5ae9a3b280a5b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c371f3088d17cc8e35a06dcf0915416c9d067e1"
        },
        "date": 1725477172708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1222.07470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.49873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.89921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1345.91611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 339.7390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 384.60654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.78369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.9673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3745.08291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4062.406640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 785.29345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 788.47666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1309.6365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1004.5708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1161.846484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1103.87041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1337.24443359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c27abd27bbfdb042572896f6e2df7eae1029fab5",
          "message": "Fix clippy warning in throughput_client.rs (#1001)\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T11:00:39Z",
          "tree_id": "e79f4d749e07088cdb0e67f11ecf2462f2363627",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c27abd27bbfdb042572896f6e2df7eae1029fab5"
        },
        "date": 1725627902498,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.23896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1946.4640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 852.6359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1366.22216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 336.91669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 415.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 218.47431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 217.32509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3568.86923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4090.00498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 841.13193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 830.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 739.82392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 724.46787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1268.41474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1146.571875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1008.33369140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5d1535012312a8830725047b35c40f7a6ebac5fb",
          "message": "Add support for concurrent downloads to client_benchmark example (#1000)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-06T13:19:40Z",
          "tree_id": "02fd47d39f8189a6b9154d07050e104b2a8b7fea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d1535012312a8830725047b35c40f7a6ebac5fb"
        },
        "date": 1725636274123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.83505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1919.07158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1333.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.45595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 373.82294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.42734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.2224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3375.56884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4037.95224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 874.84462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 800.36953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1482.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1041.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1147.56953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1056.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1312.11396484375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1db78f38c8df2826b449409a54ed1e578c5c6985",
          "message": "Backwards seek window does not affect the read window (#999)\n\n* Use part's offset to calculate remaining window\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Add names to DataRead variant's fields\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Make new code more uniform with the rest of it\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T13:29:46Z",
          "tree_id": "a3d64a2c2104c61859c6c321e484952d321585a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1db78f38c8df2826b449409a54ed1e578c5c6985"
        },
        "date": 1725637003989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.50859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.41201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.1013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1386.83828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.0333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 580.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.52216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 232.02529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3502.99716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4370.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 852.65556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 912.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1138.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1373.34462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1245.048046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1101.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1240.13486328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "813f95d644ef7e4f02acb072ac54690699e34974",
          "message": "Upload benchmark results to S3 when the check step failed (#998)\n\n* Save benchmark results to S3 when the check step failed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Update all job defenitions\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T15:42:13Z",
          "tree_id": "b722266b9588a256a847f9e48f0fb7f891f72353",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813f95d644ef7e4f02acb072ac54690699e34974"
        },
        "date": 1725644867795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1300.94521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1952.00107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1359.08193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 324.46533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 486.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 175.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3838.18662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4145.81376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 759.02705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 836.07568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1335.55185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 823.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1280.56552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1073.2447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.0130859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d498852520ba2f22ca3c76409f7b3faad9e2106",
          "message": "Update nix dependency from 0.27.1 to 0.29.0 (#1003)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-06T17:00:41Z",
          "tree_id": "1afbc653d279290796a7a6ab38338c500265fe29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d498852520ba2f22ca3c76409f7b3faad9e2106"
        },
        "date": 1725649452226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1287.534375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1993.6271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.32578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1375.79208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 328.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 377.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.26279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3495.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4179.88583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1013.096484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 800.79736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1351.0884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1136.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1138.659765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1110.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1121.7705078125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdb8ccdabff7d6ad3a6be379317f2ff7341d834f",
          "message": "Avoid extending part on backward seek (#1005)\n\n* Avoid extending part on backward seek\n\nCurrently, we combine parts from the seek window to `current_part` in the\npart queue whenever we seek backward which mean we also have to re-compute\nchecksums for this combined part. It particularly affect read throughput in\nsome use cases where backward seek rate is high. This change should improve\nthe throughput for those use cases.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-09T13:05:39Z",
          "tree_id": "360e3d8af2c73f8865d5d0ea88be24afac2d1ab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cdb8ccdabff7d6ad3a6be379317f2ff7341d834f"
        },
        "date": 1725894611555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1286.30830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2030.3810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1556.546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.4125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 482.8400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.1009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3452.7203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4076.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1437.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1334.88544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1305.7912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1474.03212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1359.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1117.77978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1390.94970703125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}