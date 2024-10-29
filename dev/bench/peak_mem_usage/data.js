window.BENCHMARK_DATA = {
  "lastUpdate": 1730221888813,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "distinct": true,
          "id": "5954f539c9e07e565ee1519e6f73e64dc42eea77",
          "message": "Add support for custom headers in PUT requests (#1059)\n\n* Add custom headers to put_object_single\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add custom headers to put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T10:20:36Z",
          "tree_id": "ae843188149e0b169bf57b86b7767b5098459a8a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5954f539c9e07e565ee1519e6f73e64dc42eea77"
        },
        "date": 1728994786899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 135.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 376.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 138.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43131.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 440.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47470.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 540.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11698.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 282.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10749.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13209.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 278.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 730.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 407.08203125,
            "unit": "MiB"
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
          "id": "2b0161600400c7ab7ccb1d6811abb9774facef5d",
          "message": "Release v1.10.0 (#1060)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-15T13:16:36Z",
          "tree_id": "f50831bf5cefbec38e30e8b5ffabe04b56bc2e30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b0161600400c7ab7ccb1d6811abb9774facef5d"
        },
        "date": 1729005369381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 135.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 382.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 139.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37690.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 425.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49600,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 539.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9323.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 275.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10858.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11568.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 276.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 748.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.3828125,
            "unit": "MiB"
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
          "distinct": true,
          "id": "e98a5c2271e2370e2380e25b055ff4f437e923df",
          "message": "Return the new object ETag in PutObjectResult (#1057)\n\n* Return the ETag in PutObjectResult\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of response headers\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move ETag to a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T15:53:03Z",
          "tree_id": "e4cc93f8fa298728674031afda3192564852e862",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e98a5c2271e2370e2380e25b055ff4f437e923df"
        },
        "date": 1729014721501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 123.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 382.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 132.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 319.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35085.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 459.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49496.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 541.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10599.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11072.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12920.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 648.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 421.87109375,
            "unit": "MiB"
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
          "distinct": true,
          "id": "6a8a483ad5e54cf321fe62d10925189daec18075",
          "message": "Add support for writing object metadata with PutObject (#1062)\n\n* Add support for writing object metadata with PutObject\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make changes from code review\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Fix merge conflicts\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-16T09:59:04Z",
          "tree_id": "dc8021087652f81bb6bf3697c52ab6794d647fd7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a8a483ad5e54cf321fe62d10925189daec18075"
        },
        "date": 1729079885332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 127.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 128.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 398.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40435.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 436.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43643.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 525.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10665.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 272.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11580.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10668.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 284.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 635.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 406.984375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e411e02a42a6931ed701bf0582cde7c5a09752a4",
          "message": "Update CRT submodules to latest releases (#1061)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated mountpoint-s3-client changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T15:21:34Z",
          "tree_id": "b26b63c19e5ae32eaf2c058aac881197197f11d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e411e02a42a6931ed701bf0582cde7c5a09752a4"
        },
        "date": 1729099305714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 134.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 140.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38515.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 446.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 45722.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 546.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12103.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10680.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13510.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 610.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 444.375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "de6c1bc20781b947595f97f6f076dee5c29f13b2",
          "message": "Copy object operation (#1052)\n\n* Copy operation\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Rebased from main\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressed some comments\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressing commentds\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T16:05:39Z",
          "tree_id": "c99cda568f5b8457f46bf6ff36f713fe7d6bafd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6c1bc20781b947595f97f6f076dee5c29f13b2"
        },
        "date": 1729101780992,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 133.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 382.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 133.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37342.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 441.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 48651.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 521.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9530.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 277.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13689.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12551.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 274.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 582.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.984375,
            "unit": "MiB"
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
          "id": "d1b662b7692e60b46e63a74ec1e63acc158a892e",
          "message": "Add entries for new PUT features to the client changelog  (#1067)\n\n* Add entries for new PUT features to the client changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove subsection\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-16T16:37:38Z",
          "tree_id": "3d13d596b3210b5047dbcc049b87ca1a6a07ead5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1b662b7692e60b46e63a74ec1e63acc158a892e"
        },
        "date": 1729103830285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 131.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 142.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39008.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 431.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 46663.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 550.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8323.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 281.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11321.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11602.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 280.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 735.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 424.4375,
            "unit": "MiB"
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
          "id": "587df3b1988441acf3cf86983aa096f7b50d151f",
          "message": "Update CRT submodules to latest releases (#1069)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update non-existent network interface initialization test\n\nCRT was returning error during first operation before if it provided\nwith a non-existent network interface name. But with\nhttps://github.com/awslabs/aws-c-s3/pull/456, it started failing\nduring the client creation phase. Our tests were written for the\nprevious behaviour and was expecting client creation to succeed even\nwith an invalid network interface. The test is updated to expect\nerrors during client creation.\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG\n\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Burak <unexge@gmail.com>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak <unexge@gmail.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-17T14:16:47Z",
          "tree_id": "094a67417e5b700769c6dbc2b2b1f4f90ffe5b7e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/587df3b1988441acf3cf86983aa096f7b50d151f"
        },
        "date": 1729181797116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 141.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 384.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 136.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38745.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 451.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 45331.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 551.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10455.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9937.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12556.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 276.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 584.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.03125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d43629e78ec3a3709a0d4bebae74cac66440fe6",
          "message": "Release new crate versions (#1070)\n\n* Release new crate versions\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for `mountpoint-s3-crt`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-17T15:47:19Z",
          "tree_id": "7ddd775a9582cfb8d0ffa3271cdedb2325ffaf43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d43629e78ec3a3709a0d4bebae74cac66440fe6"
        },
        "date": 1729187077150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 133.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 375.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 130.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39933.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 446.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43564.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 526.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10518.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11225.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13414.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 279.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 529.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 399.625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39c58a112576e5c31863291f322fc43ab5689baa",
          "message": "Pin Rust to 1.81.0 (#1073)\n\n* Pin Rust to 1.81.0\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Revert GitHub action changes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Use `actions-rust-lang/setup-rust-toolchain@v1` to install Rust\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Disable default RUSTFLAGS\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Add `rust-src` to components in `rust-toolchain.toml`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-22T12:27:14Z",
          "tree_id": "ac6d416b1111ddc104d31ca905fe71e47aa9047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c58a112576e5c31863291f322fc43ab5689baa"
        },
        "date": 1729607240173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 125.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 383.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 144.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40908.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 446.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 55559.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 537.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12245.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 280.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11711.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11428.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 279.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 746.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 458.7734375,
            "unit": "MiB"
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
          "id": "6d3488b7a5b9802fba3d16949f6471aa29f6996a",
          "message": "Suggest a workaround to random write errors in our troubleshooting guide (#1074)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-23T09:04:13Z",
          "tree_id": "981b50223c175f374d6dfa03af2e9c601b126c59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d3488b7a5b9802fba3d16949f6471aa29f6996a"
        },
        "date": 1729681326247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 142.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 124.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39771.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 432.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 45164.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 537.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10579.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 272.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10653.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10245.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 280,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 609.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 397.7890625,
            "unit": "MiB"
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
          "id": "286d348bd80e6d99dbad404e8bf193e765b0617b",
          "message": "Add failure hook for put_object_single (#1077)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-23T09:52:44Z",
          "tree_id": "c1901844e21f0d07aa1054cbf880b77b9a5c85f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/286d348bd80e6d99dbad404e8bf193e765b0617b"
        },
        "date": 1729684155324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 130.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 384.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 133.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40267.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 424.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38404.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 544.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10887.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 277.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12013.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11671.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 274.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 703.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 414.9453125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc",
          "message": "Bump to stable Rust (1.82) (#1075)\n\n* Use `stable` Rust channel\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Pass `+whole-archive` linker flag for `aws-c-common` in debug build\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Replace deprecated PanicInfo type alias\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n(cherry picked from commit bbaead293880eaa84cc12f0136b8c50de368afd4)\n\n* Always pass `+whole-archive` modifier for `aws-c-common`\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-10-23T11:20:48Z",
          "tree_id": "0e4dd1480fbe470006167e4082bc362a70f272cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc"
        },
        "date": 1729689492678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 382.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 150.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40449.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 441.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 48898.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 548.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11583.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 280.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11759.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11578.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 278.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 439.23046875,
            "unit": "MiB"
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
          "id": "4dc8e7db1754e543977eeb32ee6670824d29dd44",
          "message": "Remove use of ObjectInfo in S3 client HeadObject response (#1058)\n\n* Remove use of ObjectInfo in S3 client HeadObject response\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Change HeadObjectResult etag field from String to ETag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-24T08:02:29Z",
          "tree_id": "a811bc5dd139884d431dc5351357eec29eac1307",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dc8e7db1754e543977eeb32ee6670824d29dd44"
        },
        "date": 1729763941264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 128.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 379.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 128.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39551.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 437.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42517.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 559.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10248.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 278.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10939.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14093.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 283.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 511.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 386.62109375,
            "unit": "MiB"
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
          "distinct": true,
          "id": "e72d7ac4fd9ab3f37b9c30048320032a2a9808a7",
          "message": "Upgrade dependencies (#1081)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-24T16:55:46Z",
          "tree_id": "ccf2e2057d3c2557a6b11f927acdbe08af351456",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e72d7ac4fd9ab3f37b9c30048320032a2a9808a7"
        },
        "date": 1729795989863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 138.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 383.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 137.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42121.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 456.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44487.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 563.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9648.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14092.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12604.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 280.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 702.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 430.1171875,
            "unit": "MiB"
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
          "id": "8f2770b32389f415626c249e46282b9995b428e7",
          "message": "Add ability to request checksum in an S3 HeadObject request (#1083)\n\n* Add option to retrieve additional checksums with HeadObject\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry and comment\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove import condition for s3express_tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-28T13:55:13Z",
          "tree_id": "3e7e43ffee37c0d772a529c2798e112f107cddd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f2770b32389f415626c249e46282b9995b428e7"
        },
        "date": 1730130807580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 122.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 130.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 397.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34303.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 441.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40790.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 542.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10362.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12305.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11727.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 272.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 745.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 445.99609375,
            "unit": "MiB"
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
          "id": "05a50dade864bb06e767ea4d6e6473ed4c51dc06",
          "message": "Add additional checksum algorithms in mountpoint-s3-crt crate (#1082)\n\n* Add support for SHA1\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove implementation of std::hash::Hasher for checksum types\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add benchmark for SHA1 checksum\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix Rustdoc, length checks for c_int\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRC64, SHA256\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry for adding bindings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add PR links for change log entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove mountpoint-s3-client changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update SHA1 tests to be consistent with SHA256 tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add ByteBuf wrapper for aws_byte_buf\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRT IO lib init call on benchmark lib load\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-28T18:00:34Z",
          "tree_id": "9286818519bfd4e848ad59fea260216ee5f45e9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05a50dade864bb06e767ea4d6e6473ed4c51dc06"
        },
        "date": 1730145505966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 124.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 376.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 128.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38219.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 422.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44902.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 521.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11431.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11069.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10905.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 753.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 426.47265625,
            "unit": "MiB"
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
          "id": "ed999df7c9622236a477294ea50b85adacdc942f",
          "message": "Fix ESTALE after upload (#1085)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-10-29T10:27:15Z",
          "tree_id": "83e427e24588f049e71124fde3ea15c4b801d077",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed999df7c9622236a477294ea50b85adacdc942f"
        },
        "date": 1730204714344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 140.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 152.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 393.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41835.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 434.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49100.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 528.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10103.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13363.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14412.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 274.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 659.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 428.7421875,
            "unit": "MiB"
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
          "id": "3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa",
          "message": "Remove unused dependencies (#1087)\n\n* Remove unused dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Restore whitespace in Cargo.toml for mountpoint-s3-* crate dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T10:29:55Z",
          "tree_id": "9cfbfd42a4e4c19113377f1623b014c49767c009",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa"
        },
        "date": 1730204819413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 139.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 384.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 142.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 389.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 313.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41199.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 434.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44201.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 531.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14316.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 278.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13017.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13850.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 724.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 456.5,
            "unit": "MiB"
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
          "id": "856c31de291e9ed012a36aeca7e689252f216c47",
          "message": "Add checksum algorithm to ListObjectsV2 response (#1086)\n\n## Description of change\n\nFor a consumer of the S3 client, we need to return the checksum\nalgorithm used with objects.\n\nThis change exposes the checksum algorithm that is sometimes returned as\npart of a ListObjectsV2 request. This functionality is not opt-in, and\nwill now simply be exposed to be used by consumers of Mountpoint S3\nclient where supported.\n\nThis change also updates `ChecksumAlgorithm` to have a new `Unknown`\nvariant. This is a common pattern in AWS SDKs. This will allow clients\nto recognize where an unknown algorithm is returned (should the S3\nservice start supporting additional algorithms), and avoid either\nreturning `None` (if optional) or panicking when the error may be\nrecoverable.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, it changes the `ObjectInfo` and `ChecksumAlgorithm` structs.\nSpecifically, they are now marked `non_exhaustive` meaning that new\nfields could be added in the future (as has been done in this PR).\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, relevant change logs for breaking change (`non_exhaustive`) as well\nas new feature (exposing checksum algorithm) have been added to\n`mountpoint-s3-client`'s changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T15:13:32Z",
          "tree_id": "1ec1c5b3f53de9d8622a353a8be26edfef2cf5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/856c31de291e9ed012a36aeca7e689252f216c47"
        },
        "date": 1730221888773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 142.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 377.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 137.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 398.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39311.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 438.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47545.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 575.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8492.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10462.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14063.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 758.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 490.0546875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}