<?php

namespace Topxia\Service\Activity\Dao;

interface ThreadDao
{
	public function getThread($id);

	public function findThreadsByUserIdAndType($userId, $type);

	public function findThreadsByActivityId($activityId, $orderBy, $start, $limit);

	public function findThreadsByActivityIdAndType($activityId, $type, $orderBy, $start, $limit);

	public function searchThreads($conditions, $orderBys, $start, $limit);

	public function searchThreadCount($conditions);

	public function addThread($thread);

	public function deleteThread($id);

	public function updateThread($id, $fields);

	public function waveThread($id, $field, $diff);

    public function deleteThreadsByIds(array $ids);

}