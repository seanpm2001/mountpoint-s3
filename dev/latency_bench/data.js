window.BENCHMARK_DATA = {
  "lastUpdate": 1700133408772,
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
          "distinct": false,
          "id": "71277e796bde3b729ed2a52814ab29fe47e91f78",
          "message": "Replace use of Range with RangeBounds for DataCache trait (#579)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-26T15:06:24Z",
          "tree_id": "d7bdfea0c1c9ff00ee015b298f738b6c9639e2b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/71277e796bde3b729ed2a52814ab29fe47e91f78"
        },
        "date": 1698335364666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.049,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 121.14648240000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.3893315,
            "unit": "milliseconds"
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
          "id": "524eac6b3d0102d7413b17465ff4e257c09ec399",
          "message": "Improve ChecksummedBytes::extend and clarify data integrity guarantee (#575)\n\n* Move ChecksummedBytes into a new module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve ChecksummedBytes::extend and clarify data integrity guarantee\n\nChecksummedBytes maintains a data buffer and a checksum and guarantees that only validated data can be accessed. Transformations such as `split_off`, `extend`, or `slice` (introduced in this change), may trigger a validation (and return an IntegrityError on failure), or propagate existing checksum(s) if possible, allowing for later validation.\n\nThis change clarifies the data integrity guarantee in the docs and optimizes the extend method to avoid re-validation when the checksums for both slices can be combined. It also avoid a redundant buffer allocation.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add split_off tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Make clearer that shrink_to_fit does not copy data\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-10-26T18:22:18Z",
          "tree_id": "f618984e46d80f811dd6b916b1dcc524dc52a6b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/524eac6b3d0102d7413b17465ff4e257c09ec399"
        },
        "date": 1698347034253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.27,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.048,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 119.42166970000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.1834439,
            "unit": "milliseconds"
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
          "id": "04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0",
          "message": "Fix readme links (#580)\n\nThe GitHub highlights thing seems to break relative links.\n\nFixes #578.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-26T18:54:27Z",
          "tree_id": "cd6a012cba5ada8149056662c5db353f2134748c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0"
        },
        "date": 1698348888366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.093,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 127.29028659999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.222796100000004,
            "unit": "milliseconds"
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
          "id": "8e5688dc45f5a76d145d03a859ad0160a12e43c8",
          "message": "Allow repeated readdir offsets (#581)\n\n* Allow repeated readdir offsets\n\nPOSIX allows seeking an open directory handle, which in FUSE means the\n`offset` can be any offset we've previously returned. This is pretty\nannoying for us to implement since we're streaming directory entries\nfrom S3 with ListObjects, which can't resume from an arbitrary index,\nand can't fit its continuation tokens into a 64-bit offset anyway. So\nwe're probably never going to truly support seeking a directory handle.\n\nBut there's a special case we've seen come up a couple of times (#477, #520):\nsome applications read one page of directory entries and then seek back\nto 0 and do it again. I don't fully understand _why_ they do this, but\nit's common enough that it's worth special casing.\n\nThis change makes open directory handles remember their most recent\nresponse so that they can repeat it if asked for the same offset again.\nIt's not too complicated other than needing to make sure we do\nreaddirplus correctly (managing the lookup counts for entries that are\nbeing returned a second time).\n\nI've tested this by running the PHP example from #477, which now works.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog and docs\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-27T15:02:35Z",
          "tree_id": "0a00dc019105785c874c199e01518a49c7a52e28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e5688dc45f5a76d145d03a859ad0160a12e43c8"
        },
        "date": 1698421116559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.205,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.726,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.85587140000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.8740317,
            "unit": "milliseconds"
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
          "id": "301ee162bf9a325b46988f6fce7d2f4c5cf5627c",
          "message": "Use O_APPEND for logs and log version number (#588)\n\nIn background mode we have two processes both racing on the log file,\nand they can scribble each other's log entries (I saw this in #566).\nO_APPEND should fix that. We should also log the version number as a\npoint of reference.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-31T09:38:02Z",
          "tree_id": "95e586464e43be39ca5537a6cd23193971482dff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/301ee162bf9a325b46988f6fce7d2f4c5cf5627c"
        },
        "date": 1698747173840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.015,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 140.5511171,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.0800454,
            "unit": "milliseconds"
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
          "id": "404ba9c9965a9efc83bb84acabf01af4b03ce3ec",
          "message": "Remove unused generic in DataCache (#589)\n\n* Remove unused generic in DataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataCache RustDoc\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-31T16:11:47Z",
          "tree_id": "cd4c68d699585b4bcc87220b1dc93e9003644eae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/404ba9c9965a9efc83bb84acabf01af4b03ce3ec"
        },
        "date": 1698770723052,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.367,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 123.8504538,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.010123,
            "unit": "milliseconds"
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
          "id": "9a4cfd8a5f59cf744268c19ceaa608354db45e7a",
          "message": "Implement disk-based DataCache with no eviction (#593)\n\n* Implement disk-based DataCache with no checksums or eviction\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typos\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace Base64URL encoding with Base64URLUnpadded encoding for data cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Ensure cached indicies are sorted in DiskDataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add trace message when creating block in cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* WIP: Add checksums to on-disk cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove cached_block_indices implementation on DiskDataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move version identifier to constant\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace SerializableCrc32c with u32\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataBlock::new(..) to return Result\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add verification of block metadata to unpack after reading\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace Base64 encoding with SHA256 hash\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add TODO to split directories into sub-directories to avoid hitting any FS-specific max number of dir entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove intermediate buffers when (de)serializing DataBlock with bincode\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add cache version identifer to the start of blocks written to disk\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix comment on ETag::into_inner\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add rustdoc to DataBlock::new\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo in rustdoc for DataBlock::data\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add expected version to data block read error message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Split DataBlock header fields into BlockHeader\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add checksum validation on on-disk cache DataBlock header contents\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove outdated TODO\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add test for detecting when DataBlock requires version bump\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Refactor errors for DataBlock\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename DataBlock to DiskBlock\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-03T12:27:22Z",
          "tree_id": "7fa4785ab17d82d9e72ffb42bedbf87de7682baa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9a4cfd8a5f59cf744268c19ceaa608354db45e7a"
        },
        "date": 1699016803189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.336,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 127.3275642,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 96.6775164,
            "unit": "milliseconds"
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
          "id": "faebbef09df4eff6ca9270a536bb89e81a882d5c",
          "message": "Expose DataCache module and CacheKey fields (#596)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-06T10:12:42Z",
          "tree_id": "386506ee213da57dd953f342f5b942dbb90a492c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/faebbef09df4eff6ca9270a536bb89e81a882d5c"
        },
        "date": 1699268015028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.594,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.9618724,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.723398,
            "unit": "milliseconds"
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
          "id": "84c8a722acc38ba7be5ff598d710031e6997e409",
          "message": "Fix various clippy warnings about unused code and variables (#597)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-06T15:02:02Z",
          "tree_id": "34697dc75aa55b266eec033b9f31289f71cece7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c8a722acc38ba7be5ff598d710031e6997e409"
        },
        "date": 1699285329551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.098,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.481,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.1243924,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.2787408,
            "unit": "milliseconds"
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
          "id": "164789b7df3071d5d949cb0387de50dde1e8345f",
          "message": "Add instructions on mounting S3 bucket across reboots to CONFIGURATION.md (#591)\n\n* Add instructions on mounting S3 bucket across reboots to CONFIGURATION.md\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update WantedBy target from default to remote-fs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update documentation based on PR feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-07T03:23:56Z",
          "tree_id": "b6995122ca2aae9cbe14098cdb603bacefbf2369",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/164789b7df3071d5d949cb0387de50dde1e8345f"
        },
        "date": 1699329273088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.292,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 112.45731,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.8632405,
            "unit": "milliseconds"
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
          "id": "6dead834c3867e4ed1625ca1cfa080ce5e6deef0",
          "message": "Update vendored fuser to 82bd70c (v0.14.0) (#599)\n\n* Update vendored fuser to 82bd70c (v0.14.0)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update fuser dependency to v0.14.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-07T15:21:02Z",
          "tree_id": "382b6f9bdc695a261ea499efcc262086236692fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6dead834c3867e4ed1625ca1cfa080ce5e6deef0"
        },
        "date": 1699372670770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.556,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 125.0754998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.2232942,
            "unit": "milliseconds"
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
          "id": "c6b2a17e405a6754926c4f726f646efe9ef2bd2a",
          "message": "Introduce Prefetch trait (#595)\n\nIntroduce a new `Prefetch` trait to abstract how `S3Filesystem` fetches object data from an `ObjectClient`. While this change does not introduce any functional change, this abstraction will be used to implement optional object data caching.\n\nThe existing `Prefetcher` struct has been adapted to implement the new `Prefetch` trait. The main changes are:\n* it is generic on the `ObjectPartStream` (previously `ObjectPartFeed`), rather than using dynamic dispatch,\n* it does not own an `ObjectClient` instance, instead one is required when initiating a `prefetch` request,\n* the logic to spawn a new task for each `GetObject` request and handle the object body parts returned was moved into `ObjectPartStream`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-08T14:26:45Z",
          "tree_id": "1b6103bf65da935f6950522e3207dfec4d77296b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6b2a17e405a6754926c4f726f646efe9ef2bd2a"
        },
        "date": 1699456125027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.783,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.9395376,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.522471,
            "unit": "milliseconds"
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
          "id": "9768f31cdb62884ea3e145311236f1c8252378b6",
          "message": "Update CRT submodules to latest releases (#601)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-09T10:50:12Z",
          "tree_id": "ad0db3334c651795cbd0a847cd4bf021038052d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9768f31cdb62884ea3e145311236f1c8252378b6"
        },
        "date": 1699528920280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.739,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.8039256,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.2233104,
            "unit": "milliseconds"
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
          "id": "689ebe3a93196b6c7f568f13267cb80c0985712e",
          "message": "Add ETag into DiskDataCache hashed block path (#594)\n\n* Move ETag into DiskDataCache hashed block path\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Test hash_cache_key separately from get_path_for_key/get_path_for_block\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CACHE_VERSION to hash computed on cache_key\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-10T16:53:40Z",
          "tree_id": "2839291d2a4dc372c483627d3bd7df7c74972144",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/689ebe3a93196b6c7f568f13267cb80c0985712e"
        },
        "date": 1699637117159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.336,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.9364887,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.0521842,
            "unit": "milliseconds"
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
          "id": "493fc236846d0c28246fb6b728c2dc17fb5810e7",
          "message": "Update CRT submodules to latest releases (#604)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-14T11:40:50Z",
          "tree_id": "d38f043e9d7000471ac4791bb3e39d3c16cf670b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/493fc236846d0c28246fb6b728c2dc17fb5810e7"
        },
        "date": 1699964231402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.611,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.5873472,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.36829759999999,
            "unit": "milliseconds"
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
          "id": "d38d45fd6e68568839c62a71d1d70996947854f5",
          "message": "Change local file/directory expiry TTL from NEVER_EXPIRE to 100ms (#584)\n\n* Change validity of files and directory from NEVER_EXPIRE to 100 ms while create()\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Used cache config value instead to set validity\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Trying to check if removing file validity assertions works as no way to test on local system\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed Invalid Inode Stat test for setattr\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Modified test for setattr on invalid stat as now it should be able to reset the stat expiry\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added validity update of local inode for lookup\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added resetting of InodeStat expiry in setattr as well\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the change in Changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary cloning of inode\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-11-14T11:54:11Z",
          "tree_id": "add3dba664a949801d27f5e92e6cd520df7299d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d38d45fd6e68568839c62a71d1d70996947854f5"
        },
        "date": 1699964772616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.144,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.679,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.1410102,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.8655558,
            "unit": "milliseconds"
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
          "id": "efc4c0e3f89c5f45797663b31312fe592c33c4cd",
          "message": "Release v1.1.1 (#605)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-14T13:55:42Z",
          "tree_id": "54c9ab000ed44b36cf9cd2c374910265774c879a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/efc4c0e3f89c5f45797663b31312fe592c33c4cd"
        },
        "date": 1699972352807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.327,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.3814147,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.97185040000001,
            "unit": "milliseconds"
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
          "id": "a1e4d861b92ff30db2153b327bebd8fcf11b8308",
          "message": "Add caching Prefetch implementation (#598)\n\n* Integrate cache in Prefetcher\n\nIntroduce a new implementation of the Prefetch trait which uses a DataCache. This change also adds CLI args to Mountpoint to enable the on-disk data cache. The new args are only available under the \"caching\" feature and are subject to change.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce unified RequestRange::align\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments and address other feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Assert invariants when populating the cache from the GetObject result\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-15T18:55:49Z",
          "tree_id": "67b2a661ce3b7110d8e14fcd1cb956b44cb7ae01",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1e4d861b92ff30db2153b327bebd8fcf11b8308"
        },
        "date": 1700076469708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.636,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.0491659,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.9451263,
            "unit": "milliseconds"
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
          "id": "52dfe2970d1fc2a7c68822bf3a4ef4ecb80c6d3d",
          "message": "Remove unused 'cached_block_indices' method in DataCache trait (#607)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-16T02:15:28Z",
          "tree_id": "bbe52e4431a3c2490524d4882c839cccc941521f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/52dfe2970d1fc2a7c68822bf3a4ef4ecb80c6d3d"
        },
        "date": 1700102857319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.567,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 123.3952723,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.58642640000001,
            "unit": "milliseconds"
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
          "id": "3264f2b08f2931a0a2c04e15d4780d99ce18de2a",
          "message": "Split cache hashed directory keys to avoid any FS-specific limits (#606)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-16T10:45:10Z",
          "tree_id": "1926a365ff857c5900b2a38d16e35fff395a2564",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3264f2b08f2931a0a2c04e15d4780d99ce18de2a"
        },
        "date": 1700133408281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.638,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.623895,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8219484,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}