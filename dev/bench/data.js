window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a016e53712b3738b9c2fc1dd40b6d69bfd012090",
          "message": "Updating the CRT submodules with the following commits to latest releases- (#288)\n\nc3f95ebf3d6d1608e1656bb08eca05e303cc4fd3\r\n5d912b0dc53d383cdd1dd82df87c60e8ca95a1da\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-06-14T00:14:40-05:00",
          "tree_id": "b07a846d475fe6b119946a8fcb1b05346a4c3138",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a016e53712b3738b9c2fc1dd40b6d69bfd012090"
        },
        "date": 1686720937342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1162.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6795.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 269.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.46875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1940.734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.8193359375,
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
          "id": "80437aefeac1d0cd93470eb259eb7ab58ca38fad",
          "message": "Run benchmark with auto network throughput (#290)\n\nNow that we have auto network throughput configuration for Mountpoint\r\nwe can use default configuration in the benchmark. It also makes the\r\nbenchmark script more flexible when running on other types of instance.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T11:27:32-05:00",
          "tree_id": "d1ed6d18b19c745c1fd14aaf8dbe06277e82694b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/80437aefeac1d0cd93470eb259eb7ab58ca38fad"
        },
        "date": 1686761289815,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1119.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6339.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2084.86328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.4990234375,
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
          "distinct": true,
          "id": "1a77d917ea2aaa29f21a11782e4b9d6178ea6e1f",
          "message": "Introduce uploader and use async streaming (#282)\n\n* Introduce uploader and use streaming PUT\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add put_object test\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add write_test for streaming PUT\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Tidy up Uploader\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Tidy up client\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Tidy up test clients\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move the async body_input_stream into the http Message\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address feedback, add tests.\r\n\r\nAlso: rename StringExt to ToAwsByteCursor and implement for [u8].\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use PhantomPinned\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address more PR feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add timeout to tests\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use ListMultipartUploads to test aborting a streaming PutObject.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address latest feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove unused InputStream and related methods\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Return AWS_IO_STREAM_READ_FAILED on dropping ReadRequest\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-14T11:31:29-05:00",
          "tree_id": "2fde40698a8a916c4316f4fa7bde3fda50c7a5c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1a77d917ea2aaa29f21a11782e4b9d6178ea6e1f"
        },
        "date": 1686761518617,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.5419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1307.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6690.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1921.9267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.5,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.3193359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b85e1f6ee0ce64adb453827c3275d2e71cd0769e",
          "message": "Pick up CRT async streaming fixes (#292)\n\nPicks up https://github.com/awslabs/aws-c-s3/pull/313, which fixes\r\nconcurrency in async streaming\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-14T22:51:19+01:00",
          "tree_id": "6a971958c263a8a4edb7ad4f89cb6693beb8db25",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b85e1f6ee0ce64adb453827c3275d2e71cd0769e"
        },
        "date": 1686780746076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1430.634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6352.17578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1938.3212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.494140625,
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
          "id": "e37c7a4a99a304c0fec29d0e16ee7abafd4ab518",
          "message": "Update CI file/prefix variables with sensible defaults (#293)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-15T12:29:06-05:00",
          "tree_id": "9a0bdfd734bac13284fbaec6ef7c30242e96e8d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e37c7a4a99a304c0fec29d0e16ee7abafd4ab518"
        },
        "date": 1686851403483,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 900.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6326.6357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.0693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1960.0087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.3125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.20703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66806474+ericjheinz@users.noreply.github.com",
            "name": "ericjheinz",
            "username": "ericjheinz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e8189f59808b8f35c066c3f2f4b8147a99f78cc",
          "message": "Allow static linking of BYO CRT libs (#298)\n\nTesting:\r\n\r\n```\r\n% export MOUNTPOINT_CRT_INCLUDE_DIR\r\n% export MOUNTPOINT_CRT_LIB_DIR\r\n\r\n% export MOUNTPOINT_CRT_LIB_LINK_STATIC=1\r\n\r\n% cargo build\r\n    ...\r\n    Finished dev [unoptimized + debuginfo] target(s) in 9.22s\r\n\r\n% ldd target/debug/mount-s3\r\n\tlinux-vdso.so.1 (0x00007fff2b73b000)\r\n\tlibfuse.so.2 => /lib64/libfuse.so.2 (0x00007f4f5d91f000)\r\n\tlibgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f4f5d709000)\r\n\tlibrt.so.1 => /lib64/librt.so.1 (0x00007f4f5d501000)\r\n\tlibpthread.so.0 => /lib64/libpthread.so.0 (0x00007f4f5d2e3000)\r\n\tlibm.so.6 => /lib64/libm.so.6 (0x00007f4f5cfa3000)\r\n\tlibdl.so.2 => /lib64/libdl.so.2 (0x00007f4f5cd9f000)\r\n\tlibc.so.6 => /lib64/libc.so.6 (0x00007f4f5c9f2000)\r\n\t/lib64/ld-linux-x86-64.so.2 (0x00007f4f5f030000)\r\n\r\n% unset MOUNTPOINT_CRT_LIB_LINK_STATIC\r\n\r\n% cargo build\r\n   ...\r\n    Finished dev [unoptimized + debuginfo] target(s) in 8.69s\r\n\r\n% ldd target/debug/mount-s3\r\n\tlinux-vdso.so.1 (0x00007ffd599c8000)\r\n\tlibaws-c-common.so.1 => not found\r\n\tlibaws-c-io.so.1.0.0 => not found\r\n\tlibaws-c-http.so.1.0.0 => not found\r\n\tlibaws-c-auth.so.1.0.0 => not found\r\n\tlibaws-checksums.so.1.0.0 => not found\r\n\tlibaws-c-s3.so.0unstable => not found\r\n\tlibfuse.so.2 => /lib64/libfuse.so.2 (0x00007f2ecc6eb000)\r\n\tlibgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f2ecc4d5000)\r\n\tlibrt.so.1 => /lib64/librt.so.1 (0x00007f2ecc2cd000)\r\n\tlibpthread.so.0 => /lib64/libpthread.so.0 (0x00007f2ecc0af000)\r\n\tlibm.so.6 => /lib64/libm.so.6 (0x00007f2ecbd6f000)\r\n\tlibdl.so.2 => /lib64/libdl.so.2 (0x00007f2ecbb6b000)\r\n\tlibc.so.6 => /lib64/libc.so.6 (0x00007f2ecb7be000)\r\n\t/lib64/ld-linux-x86-64.so.2 (0x00007f2ecd6a8000)\r\n```\r\n\r\nSigned-off-by: Eric Heinz <eheinz@amazon.com>\r\nCo-authored-by: Eric Heinz <eheinz@amazon.com>",
          "timestamp": "2023-06-17T00:12:12Z",
          "tree_id": "b393e08f4da58fe011e7ba2537bec897399516e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e8189f59808b8f35c066c3f2f4b8147a99f78cc"
        },
        "date": 1686961989171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.0087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.6494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1106.1875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6240.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1979.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.8046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.5068359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f856090c21bc32b87b1467d51415c5e738753314",
          "message": "Remove another profile override (#296)\n\nWe fixed one of these obsolete overrides in #272 but missed this one.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-18T11:50:49+01:00",
          "tree_id": "cd3575a95e713d35fe7343f2b544dfee68e970bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f856090c21bc32b87b1467d51415c5e738753314"
        },
        "date": 1687086736321,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.14453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1317.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6476.2919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 265.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1900.5615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.8369140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be8464513568a30409c59cf157a55b8ed8d02257",
          "message": "Fix rmdir & unlink fuse tests by adding wait condition following release operation (#289)\n\n* Added sleep after drop to complete the object upload to remote in rmdir and unlink test\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* Added macro for sleep till retry succeed\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* resolved conflicts\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* Modified the sleep timing\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\n\r\n* Added function instead of macro for retries\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* removed mut where it was not needed\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed unnecessary mut\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: sauraank <sauraank@amazon.co.uk>\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-06-19T12:36:10-05:00",
          "tree_id": "08a47a2cd427674f0defa04ca2cb9764f84ac03f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be8464513568a30409c59cf157a55b8ed8d02257"
        },
        "date": 1687197433388,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1279.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6558.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2079.0556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.1220703125,
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
          "distinct": true,
          "id": "5d6fa05c7a898b4d9d9b18caf97975c6efd3ecd8",
          "message": "Allow empty PutObject requests (#295)\n\nThe new streaming PUT implementation in #282 broke empty PutObject requests (i.e. with a 0-byte body). This is because the CRT does not currently support 0-byte meta-requests without Content-Length. Here is the returned error:\r\n\r\n```\r\n0 byte meta requests without Content-Length header are currently not supported. Set Content-Length header to 0 to upload empty object \r\n```\r\n\r\nWhile this limitation is likely to be lifted in the CRT in the future, this change addresses it in `mountpoint-s3-client` by delaying the request until the first write is requested or complete is called, so that the Content-Length=0 header can be set in the latter case.\r\n\r\nA minor complication of this change is that `S3PutObjectRequest` now needs to hold on to the client to issue the request at a later time. To allow for it, `S3CrtClient` has been refactored to hold a pointer to a `S3CrtClientInner` which can be passed to the request.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-19T21:00:13+01:00",
          "tree_id": "ff6668483fc5e424e4fc4f2444bb40ab84d7ef47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d6fa05c7a898b4d9d9b18caf97975c6efd3ecd8"
        },
        "date": 1687206079917,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1382.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6323.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.1337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2299.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.65625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.4521484375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "824fd664f8ac7af7fee20a9072999789a1da9629",
          "message": "Suppress LeakSanitizer in glibc DNS resolver (#301)\n\nThe allocation in `__res_context_send` is owned by glibc, which is\r\nsupposed to clean it up at shutdown, but that seems to break\r\noccasionally. It's outside our control and a bounded allocation (once\r\nper process), so let's just ignore it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-19T23:34:10+01:00",
          "tree_id": "cd432dd3daf1219b37d23e21ac02212e2cb67e00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/824fd664f8ac7af7fee20a9072999789a1da9629"
        },
        "date": 1687215310419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6459.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.30078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2119.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.341796875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6f6cf615dda527577760414025744ba8e7c91ee",
          "message": "Release new crate versions (#302)\n\nThe main goal here is to get #298 out the door, but it's a good point to\r\nget the last month of updates out too.\r\n\r\nThe async streaming work changed the `put_object` interface, so this\r\nrelease is a breaking change for `mountpoint-s3-client`.\r\n\r\nWe also missed writing a changelog for v0.2.2 of `mountpoint-s3-client`,\r\nso I'm writing it here.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-20T10:14:34-05:00",
          "tree_id": "ad9f47089f9c80e6961844ceb801b5bd18392fa9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6f6cf615dda527577760414025744ba8e7c91ee"
        },
        "date": 1687275329495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 15.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6187.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1926.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.5166015625,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687344908531,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 949.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6454.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 266.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2409.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.990234375,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687555594927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.6875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6590.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 13.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1881.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 29.3095703125,
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
          "id": "4a3187b9fce63aac19e10ee59096533902da1991",
          "message": "Fix dependency installation in GitHub workflows (#314)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-24T00:03:30-05:00",
          "tree_id": "0e144bbacb4a2ad79a0b9b6da33ce207c865b0e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a3187b9fce63aac19e10ee59096533902da1991"
        },
        "date": 1687584247484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1123.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6377.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 261.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2022.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.3818359375,
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
          "id": "5074faaef281bd09b83af0895d60fe2195f357c9",
          "message": "Add clang and pkg-config dependencies to getting started instructions (#304)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-21T11:34:09+01:00",
          "tree_id": "e7bccfb061eba3ebfe4c1917d4809c1051d15dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5074faaef281bd09b83af0895d60fe2195f357c9"
        },
        "date": 1687782971689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 900.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6286.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.90625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2075.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.2841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.65234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc93e4283b2212472bc4e4b9abc09cf72d7eaab3",
          "message": "reftests: always materialize reference model from bucket contents (#311)\n\n* reftests: always materialize reference model from bucket contents\r\n\r\nToday, the reference model for the reftests is just a tree structure.\r\nWhen we make changes to the expected state of the file system, we update\r\nthis tree structure in place.\r\n\r\nThis needs to change to prepare us to extend the reftests with mutations\r\nto the *bucket*, not just the file system (i.e., concurrent mutations).\r\nWhen one of these mutations happens, we need to be able to compute what\r\nwe expect the state of the file system to be after the change. For\r\nexample, if my bucket contains keys `a` and `a/b`, and then I delete\r\n`a/b` from the bucket, what's the expected state of the file system? The\r\ncurrent implementation asks us to compute this state by making in-place\r\nmodifications to the file system tree, which is error prone -- we'd\r\nessentially be re-implementing the same inode management logic we use in\r\nthe actual file system.\r\n\r\nTo avoid this complexity, this change instead \"materializes\" the file\r\nsystem structure from the bucket structure at every step of the reftest.\r\nThe reference model is now just an S3 bucket plus lists of local files\r\nand directories. In the example above, we can simulate deleting an\r\nobject by just removing it from both the mock bucket (the one Mountpoint\r\nis accessing through the mock client) and the reference bucket (the one\r\nintroduced in this change). Then, when we rematerialize the reference\r\nfile system, we'll have the new directory structure, without having to\r\nmanually compute the changes to make to that tree.\r\n\r\nThis is nice because it means the only \"trusted\" code in the reference\r\nmodel is `build_reference`, which specifies how to convert *any* bucket\r\ninto a filesystem. One potential downside is that rematerializing the\r\nfilesystem after every operation might be expensive, but in my testing\r\nthe overhead hasn't seemed problematic.\r\n\r\nThis commit is not expected to change any semantics of the reftests, and\r\ndoesn't add any new operations. Those will come later, building on this\r\nrefactoring.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-26T17:34:09-05:00",
          "tree_id": "93b196d7084527ecb66ed8eca061cd941dd6c439",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc93e4283b2212472bc4e4b9abc09cf72d7eaab3"
        },
        "date": 1687820097834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1321.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6424.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2032.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.802734375,
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
          "id": "d3792ec2f3d27780316cd83a28d6ae96996c1616",
          "message": "Update PR template to prompt thinking around breaking changes (#318)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-28T11:53:48+01:00",
          "tree_id": "06dfa946d6f03076cd55c45c9ee2116b4211e12e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3792ec2f3d27780316cd83a28d6ae96996c1616"
        },
        "date": 1687950868361,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.34375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 875.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6230.9248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1635.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.5048828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68884556c4b07f5253cf1498601efb50639699d9",
          "message": "Add `mkdir` and `rmdir` to reftests (#316)\n\n* Add `mkdir` and `rmdir` to reftests\r\n\r\nNothing too surprising here -- we test that we can create directories as\r\nlong as a conflicting name doesn't already exist, and then we can remove\r\ndirectories if and only if they're local and empty.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Speed up `compare_file` in reftests\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-28T16:39:44-05:00",
          "tree_id": "8da7a2021cf17188cba1199f55008f60ede8cdf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68884556c4b07f5253cf1498601efb50639699d9"
        },
        "date": 1687989642970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1308.59765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.42578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6332.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2048.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.48828125,
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
          "distinct": true,
          "id": "26e61f95d535b7db61b57537ffbc858a514d5de6",
          "message": "Update cargo dependencies (#323)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T15:03:10+01:00",
          "tree_id": "ac99601d46a4ee0c8bf394cb6bf2a583a9c2a76d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26e61f95d535b7db61b57537ffbc858a514d5de6"
        },
        "date": 1688048634236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.39453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1242.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6135.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2232.1083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.658203125,
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
          "distinct": true,
          "id": "005b590b8cbac1681924d179dbe94d54b688f5cd",
          "message": "Checkout PR branch when running ASAN workflow (#324)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T14:42:35Z",
          "tree_id": "8035ce8ca411cc7f63cb2ee9df551f5dbdf4d6eb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/005b590b8cbac1681924d179dbe94d54b688f5cd"
        },
        "date": 1688051053908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6285.1064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1962.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.5078125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1688051054582,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}