---
SELECT count(*) FROM Sales;
---
UPDATE Sales
SET IsDone = FALSE
WHERE IsDone = TRUE;
---
SELECT count(*) FROM Sales WHERE IsDone = TRUE;
---
DROP TABLE Sales;
---
CREATE TABLE Sales (
    Id STRING(36) DEFAULT (GENERATE_UUID()),
    Name STRING(MAX),
    IsDone Bool DEFAULT (False)
) PRIMARY KEY (Id);
---


--- 16:26: serial
--- INFO 2024-05-27T07:35:00.974540432Z [resource.labels.containerName: worker] indexed job: 1:41.238 (m:ss.mmm)
SELECT
  *
FROM
  SPANNER_SYS.TXN_STATS_TOTAL_10MINUTE;
---
-- COMMIT_ATTEMPT_COUNT
-- COMMIT_ABORT_COUNT
-- AVG_COMMIT_LATENCY_SECONDS
-- COMMIT_RETRY_COUNT
-- 1
-- 0
-- 0.012092027813196182
-- 0

--- 16:50: parallel (16) indexed ---
--- INFO 2024-05-27T07:51:28.450202463Z [resource.labels.containerName: worker] indexed job: 7.353s
--- INFO 2024-05-27T07:51:29.130909766Z [resource.labels.containerName: worker] indexed job: 5.836s
--- INFO 2024-05-27T07:51:30.809836693Z [resource.labels.containerName: worker] indexed job: 6.940s
--- INFO 2024-05-27T07:51:31.149085280Z [resource.labels.containerName: worker] indexed job: 8.365s
--- INFO 2024-05-27T07:51:44.501828752Z [resource.labels.containerName: worker] indexed job: 8.715s
--- INFO 2024-05-27T07:51:44.826816184Z [resource.labels.containerName: worker] indexed job: 6.990s
--- INFO 2024-05-27T07:51:45.228491579Z [resource.labels.containerName: worker] indexed job: 6.733s
--- INFO 2024-05-27T07:51:45.370318447Z [resource.labels.containerName: worker] indexed job: 8.743s
--- INFO 2024-05-27T07:51:45.635838040Z [resource.labels.containerName: worker] indexed job: 7.678s
--- INFO 2024-05-27T07:51:45.810083504Z [resource.labels.containerName: worker] indexed job: 9.489s
--- INFO 2024-05-27T07:51:45.840324766Z [resource.labels.containerName: worker] indexed job: 8.592s
--- INFO 2024-05-27T07:51:46.547308083Z [resource.labels.containerName: worker] indexed job: 6.828s
--- INFO 2024-05-27T07:51:46.570282403Z [resource.labels.containerName: worker] indexed job: 7.014s
--- INFO 2024-05-27T07:51:47.016316638Z [resource.labels.containerName: worker] indexed job: 7.280s
--- INFO 2024-05-27T07:51:47.017240225Z [resource.labels.containerName: worker] indexed job: 7.901s
--- INFO 2024-05-27T07:51:47.479320786Z [resource.labels.containerName: worker] indexed job: 7.711s
---
SELECT
  *
FROM
  SPANNER_SYS.TXN_STATS_TOTAL_10MINUTE;
---
-- COMMIT_ATTEMPT_COUNT
-- COMMIT_ABORT_COUNT
-- AVG_COMMIT_LATENCY_SECONDS
-- COMMIT_RETRY_COUNT
-- 16
-- 0
-- 0.004317594226449728
-- 0

-- 17:13: parallel (16) ---
-- INFO 2024-05-27T08:13:29.123649472Z [resource.labels.containerName: worker] indexed job: 1:41.281 (m:ss.mmm)
-- INFO 2024-05-27T08:13:29.128432162Z [resource.labels.containerName: worker] indexed job: 1:41.297 (m:ss.mmm)
-- INFO 2024-05-27T08:13:36.240241724Z [resource.labels.containerName: worker] indexed job: 1:41.809 (m:ss.mmm)
-- INFO 2024-05-27T08:13:36.549657984Z [resource.labels.containerName: worker] indexed job: 1:41.518 (m:ss.mmm)
-- INFO 2024-05-27T08:13:36.720948011Z [resource.labels.containerName: worker] indexed job: 1:41.508 (m:ss.mmm)
-- INFO 2024-05-27T08:13:36.925296831Z [resource.labels.containerName: worker] indexed job: 1:41.391 (m:ss.mmm)
-- INFO 2024-05-27T08:13:37.431115399Z [resource.labels.containerName: worker] indexed job: 1:41.119 (m:ss.mmm)
-- INFO 2024-05-27T08:13:41.640130213Z [resource.labels.containerName: worker] indexed job: 1:41.731 (m:ss.mmm)
-- INFO 2024-05-27T08:13:43.239867157Z [resource.labels.containerName: worker] indexed job: 1:42.548 (m:ss.mmm)
-- INFO 2024-05-27T08:13:43.693843196Z [resource.labels.containerName: worker] indexed job: 1:42.079 (m:ss.mmm)
-- INFO 2024-05-27T08:13:44.498824943Z [resource.labels.containerName: worker] indexed job: 1:41.628 (m:ss.mmm)
-- INFO 2024-05-27T08:13:44.770492825Z [resource.labels.containerName: worker] indexed job: 1:41.939 (m:ss.mmm)
-- INFO 2024-05-27T08:13:45.580262146Z [resource.labels.containerName: worker] indexed job: 1:41.648 (m:ss.mmm)
-- INFO 2024-05-27T08:13:46.060149674Z [resource.labels.containerName: worker] indexed job: 1:41.305 (m:ss.mmm)
-- INFO 2024-05-27T08:13:46.076869894Z [resource.labels.containerName: worker] indexed job: 1:41.044 (m:ss.mmm)
-- INFO 2024-05-27T08:13:46.163547838Z [resource.labels.containerName: worker] indexed job: 1:40.994 (m:ss.mmm)
---
SELECT
  *
FROM
  SPANNER_SYS.TXN_STATS_TOTAL_10MINUTE;
---
-- COMMIT_ATTEMPT_COUNT
-- COMMIT_ABORT_COUNT
-- AVG_COMMIT_LATENCY_SECONDS
-- COMMIT_RETRY_COUNT
-- 16
-- 0
-- 0.013781769201159477
-- 0

