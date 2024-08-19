window.BENCHMARK_DATA = {
  "lastUpdate": 1724105646403,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "ac6c1770cec5ee7c0fd2ee009b87b9fdddea2af0",
          "message": "Update CRT submodules to latest releases (#940)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-12T09:55:22Z",
          "tree_id": "fe8a91bcf90942bdbe5e5ce66e8d1cb507cc8f00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ac6c1770cec5ee7c0fd2ee009b87b9fdddea2af0"
        },
        "date": 1720785161748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.7572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.641015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.554296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.14580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5530.41044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.61005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 157.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 209.36982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1865.38427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1396.65302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.70009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1910.58291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 976.33427734375,
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
          "id": "b4e11b8e4046eee141fc70ab60778dbf15db3ab2",
          "message": "Rename docs_rs config condition to docsrs (#956)\n\nThis change is made to avoid config condition errors now that check config is run by default in Rust 1.80+.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-29T16:00:51Z",
          "tree_id": "98a756cb7c33601e8f88e6dcb2926b00b72a285e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b4e11b8e4046eee141fc70ab60778dbf15db3ab2"
        },
        "date": 1722275895732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.58896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.34052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.8421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.81201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5518.73623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 486.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 155.44638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 213.45625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.8001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.1359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1392.0076171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.1498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1666.3630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 976.5458984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hahadaxigua@gmail.com",
            "name": "Ryan Tan",
            "username": "crrow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fff1320c2344171a7334a5f05f53832db4aa1f1",
          "message": "Add arguments to specify GET and PUT part size independently (#949)\n\n* feat: separate part-size for PUT & GET\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* chore: follow import style\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* fix: simplify cli help; make separated part-size conflict with old one; use read_part_size when get\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Verify new separated part size arg is conflicted with old one\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Drop Option<u64> on part-size\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Move part-size back\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n---------\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>",
          "timestamp": "2024-07-30T13:00:45Z",
          "tree_id": "0a12881106bb7aa8e6cc959342b4d82069d41431",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fff1320c2344171a7334a5f05f53832db4aa1f1"
        },
        "date": 1722351603442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.13271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.56904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.551953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5587.8041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.1486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 134.23984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1850.36787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.18291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1448.78857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.80673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 120.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1777.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.4021484375,
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
          "id": "42ad47a5637ba218a0a9b0765280aed3debf5808",
          "message": "Update CRT submodules to latest releases (#962)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-31T12:58:02Z",
          "tree_id": "e836c756eef3d96308e675c7b5f8a1c17b216110",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/42ad47a5637ba218a0a9b0765280aed3debf5808"
        },
        "date": 1722437779564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.662890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.3162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.04189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.73251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.08046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.45712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5435.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 481.25390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 203.66455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1869.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.84951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1558.86591796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1323.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.28623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1926.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.0447265625,
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
          "id": "3efed3d8e0152229b3ba9972ac105cc6a61ebafc",
          "message": "Decompose request reading and body splitting logic (#957)\n\n* Split request reading and body splitting logic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Log and increase metric once\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Review comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-07-31T13:35:16Z",
          "tree_id": "c0abc9e736518c1d8f1ff034d1bee7353f2c047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3efed3d8e0152229b3ba9972ac105cc6a61ebafc"
        },
        "date": 1722439894664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.63115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.76923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.64580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.46220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.04482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.42373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5595.74091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 145.5216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 207.891796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1979.96689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1377.19521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1417.00224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 120.44833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1612.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1153.24189453125,
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
          "id": "0db2844594b0e0df6f9aeb630fa133a93563adf8",
          "message": "Update documentation for new read/write specific part size arguments (#960)\n\n* Update documentation for new read/write specific part size arguments\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update changelog entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T06:08:08Z",
          "tree_id": "5296832e9c5e575af30ef658c2687484df34ce55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0db2844594b0e0df6f9aeb630fa133a93563adf8"
        },
        "date": 1722499611618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.741015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.686328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.60380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.15869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.199609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.17646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5786.2732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 477.27314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 142.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.621484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1921.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.1935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1555.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1256.87626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.7732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1112.11787109375,
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
          "id": "5d6faa94d18983c137b38f27b40c8a61f21252bc",
          "message": "Update CRT submodules to latest releases (#963)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T09:26:29Z",
          "tree_id": "b93fb78d804bb889fb0f77474f81e2d1de2f7ff4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d6faa94d18983c137b38f27b40c8a61f21252bc"
        },
        "date": 1722511335588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.96572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.40205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.450390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.94970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5542.15693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 481.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.69482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.7591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1854.43349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 115.69765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1440.18427734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.80810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.63798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1501.95859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 844.8693359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "387ad7933a9b0c6463f11c1eb0a6d87acaa48cd5",
          "message": "Preparing of v1.8.0 release (#964)\n\n* bumping version to 1.8.0\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* update changelog\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates changelog\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* Fix incorrect PR link\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T10:49:00Z",
          "tree_id": "af98206259292c3b582248896df7b7ba21158e27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/387ad7933a9b0c6463f11c1eb0a6d87acaa48cd5"
        },
        "date": 1722516490011,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.9732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.8900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.0623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.05302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.7275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.66328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.9890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.0166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5581.929296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.4546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 144.98896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1743.403515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.47705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1468.37236328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1280.29189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 118.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1417.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1164.5080078125,
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
          "id": "073277047bb412d1f5cf98e4efa5668074dc7626",
          "message": "Replace custom ResultExt with stable Result::inspect_err (#951)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T15:33:09Z",
          "tree_id": "a8c23da91e712e5eb260fa8852cb987496d4abf7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/073277047bb412d1f5cf98e4efa5668074dc7626"
        },
        "date": 1722533465911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.03427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.04033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.97275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5522.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 486.68515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 157.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 210.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1982.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.389453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.95107421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1301.27333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.73271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1917.21025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.9271484375,
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
          "id": "d3a070517e4551f99ecf697b33ca11cdde0c7d03",
          "message": "Fix warnings on tests (#966)\n\nA small change to fix \"unused imports\" warning messages when running\n`cargo test`.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T15:56:38Z",
          "tree_id": "fe3e304fbc55c326048316fedae40e281c3acbb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a070517e4551f99ecf697b33ca11cdde0c7d03"
        },
        "date": 1722534864682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.61103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.3875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.221484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.93134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.99833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.04169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.5345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5595.45947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 485.492578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.5255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 213.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1709.2943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 114.65205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1402.5693359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1232.28779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.575390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1423.96884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1074.1740234375,
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
          "id": "58edaafaaf065f5537202394580cf58c05017aa1",
          "message": "Update PR template to prompt thinking on change log entry (#968)\n\n* Add section on changelog updates to PR template\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add links to changelogs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-02T12:53:08Z",
          "tree_id": "49f0fb64e39106ed93d5b10ce74a726231703107",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58edaafaaf065f5537202394580cf58c05017aa1"
        },
        "date": 1722610277532,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.397265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.89892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.3890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.69560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.99580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5568.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 480.64873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 160.48017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 203.6140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2023.60947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.73828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1531.86875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1371.30068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.23359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1553.77236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1174.094921875,
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
          "id": "6e9eaa1e316ba486299d7d2f4d275a305126d3af",
          "message": "Consolidate test credential helpers into creds modules (#967)\n\n* Consolidate test creds helpers into creds modules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move creds functions depending on s3_tests feature into their own mod, re-export\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix fork_test\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-06T14:58:20Z",
          "tree_id": "0014a4d2266bdb08110539dc7a66e536127bf937",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e9eaa1e316ba486299d7d2f4d275a305126d3af"
        },
        "date": 1722963330763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.59833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.7400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.44892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 178.66396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.6947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.329296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.2552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5576.963671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 486.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 147.766015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.83486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1815.68203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 117.7609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1325.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 118.12314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1722.41513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.32783203125,
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
          "id": "6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa",
          "message": "Make s3 client able to report read window offset (#971)\n\n* Make s3 client able to report read window offset\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update CHANGELOG.md\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-07T10:20:11Z",
          "tree_id": "3aa7e908d6ee4a317253b881303ff3b970bd4d27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa"
        },
        "date": 1723033043225,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.15986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.0193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.32265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.40478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.04775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.07490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.8296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.276171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5584.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 480.52333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 134.2076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.6048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1917.50234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 111.86181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1409.49853515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1290.74033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 118.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1578.07470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.88310546875,
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
        "date": 1723040613564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.75830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.815234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.003125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.266796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.56796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.61640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5566.11904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 477.57451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 143.257421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 210.9744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1923.502734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1411.00146484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1240.8880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.14443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1445.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 978.3134765625,
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
        "date": 1723200249837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.8296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.8572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.2759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.1447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.6587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.43798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.88056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5531.10322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.584765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 150.54052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 205.26484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1733.83232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 110.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1517.040625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1367.35,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 121.17626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1438.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.35732421875,
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
        "date": 1723208691227,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.2384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.22509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.30595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 176.49140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.035546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.62666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.87021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5607.55517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 135.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 203.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1879.9908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 117.72333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1566.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1331.65634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.0544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1544.6529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.18310546875,
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
        "date": 1723210844704,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.66298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.842578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 176.084765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.14697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.17568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.57529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.081640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5557.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.438671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.94951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 205.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1933.753515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 114.869921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1416.08994140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1299.890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.84951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.44833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.54189453125,
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
        "date": 1723231085267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.08857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.97373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.78671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 179.259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.80927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.406640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.88828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.1232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5455.47080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 489.8833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 155.20849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 212.772265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2041.0416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.01025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1589.2888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1309.2228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 120.26826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1815.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.6416015625,
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
        "date": 1723740773064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 80.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 120.72646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 65.7701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 17.99462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 27.55966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 25.20654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6100.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 510.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1269.41474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 257.96376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1772.690234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.28505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1601.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.98525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.855859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1504.50068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.97451171875,
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
        "date": 1724105645934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 87.402734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 128.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 72.83603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 145.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 17.84169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 28.64453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 15.27919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 23.8072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6095.1517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.2859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1290.84208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 264.25126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1906.5259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.16123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1531.23935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1319.8484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.46103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1407.2171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 972.8939453125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}