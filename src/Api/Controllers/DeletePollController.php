<?php
/*
 * This file is part of reflar/polls.
 *
 * Copyright (c) ReFlar.
 *
 * http://reflar.io
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */
namespace Reflar\Polls\Api\Controllers;

use Reflar\Polls\Api\Serializers\QuestionSerializer;
use Reflar\Polls\Repositories\QuestionRepository;
use Flarum\Api\Controller\AbstractCollectionController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Core\Post;

class DeletePollController extends AbstractCollectionController
{
    public $serializer = QuestionSerializer::class;

    /**
     * @var QuestionRepository
     */
    protected $fields;

    public function __construct(QuestionRepository $fields)
    {
        $this->fields = $fields;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        var_dump($request->getParsedBody());
//         $pollId = array_get($request->getQueryParams(), 'id');
//         $actor = $request->getAttribute('actor');
//         $post = Post::find($request->getQueryParams(), 'id');
// echo $pollData;
//         if ($actor->can('edit.polls') || $actor->id == $post->user_id) {
//             return $this->fields->deletePoll($postId);
//         }
    }
}
